import {
  Streamlit,
  ComponentProps,
  withStreamlitConnection,
  Theme,
} from "streamlit-component-lib"
import { useEffect, useMemo } from "react"
import { createGlobalStyle } from "styled-components/macro"


import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMath from 'reveal.js/plugin/math/math';
import RevealSearch from 'reveal.js/plugin/search/search';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';


import 'reveal.js/dist/reveal.css';
import 'reveal.js/plugin/highlight/monokai.css';

interface RevealSlidesProps extends ComponentProps {
  args: any
  width: number
  disabled: boolean
  theme?: Theme
}

const includedPlugins = {"markdown": RevealMarkdown, "highlight": RevealHighlight, "katex": RevealMath.KaTeX, "mathjax2": RevealMath.MathJax2, "mathjax3": RevealMath.MathJax3, "search": RevealSearch, "notes": RevealNotes, "zoom": RevealZoom}
// const simpleCommands = {"left": Reveal.left, "right": () => {Reveal.right()}, "up": Reveal.up, "down": Reveal.down, "prev": Reveal.prev, "next": Reveal.next, "prevFragment": Reveal.prevFragment, "nextFragment": Reveal.nextFragment, "togglePause": Reveal.togglePause, "toggleAutoSlide": Reveal.toggleAutoSlide, "toggleHelp": Reveal.toggleHelp, "toggleOverview": Reveal.toggleOverview, "shuffle": Reveal.shuffle}
// const commandsWithArgs = {slide: Reveal.slide, togglePause: Reveal.togglePause, toggleAutoSlide: Reveal.toggleAutoSlide, toggleHelp: Reveal.toggleHelp, toggleOverview: Reveal.toggleOverview}

const GlobalCSS = createGlobalStyle<{ inject: string}>`
  ${props => props.inject}
`

const defaultConfig = {
  // The "normal" size of the presentation, aspect ratio will be preserved
	// when the presentation is scaled to fit different resolutions
	width: 900,
	height: 860,
	
	// Factor of the display size that should remain empty around the content
	margin: 0.05,

	// Bounds for smallest/largest possible scale to apply to content
	minScale: 0.1,
	maxScale: 3.0,

	// Help the user learn the controls by providing hints, for example by
	// bouncing the down arrow when they first encounter a vertical slide
	controlsTutorial: true,

	// Determines where controls appear, "edges" or "bottom-right"
	controlsLayout: 'edges',
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
const RevealSlides = ({ args, disabled }: RevealSlidesProps) => {   

  let configStr = JSON.stringify(args["config"])
  let initStateStr = JSON.stringify(args["initial_state"])
  // const commandStr = JSON.stringify(args["commands"])

  const setupConfig = (configString: string) : object => {
    const config = {...defaultConfig, ...JSON.parse(configStr)}
    // code to run after render goes here
    if (args["allow_unsafe_html"]) {
      // do nothing
    }
    else {
      if ('plugins' in config){
        var arr = config['plugins'];
        arr.forEach(function(moduleName: string, index: number) {
          if (moduleName in includedPlugins){
            arr[index] = (includedPlugins as any)[moduleName];
          }
          else {
            arr[index] = null;
          }
        });
        config['plugins'] = arr.filter((x:any) => !!x) as any[];
        if(!config['plugins'].includes(RevealMarkdown)){
          config['plugins'].push(RevealMarkdown);
        }
      }
      else {
        config['plugins'] = [RevealMarkdown];
      }
    }
    return config;
  }

  useMemo(()=>{
    // code to run on component mount goes here

    // To do: remove or disable previously imported css. When the list of
    // css imports exceed about 25, the page no longer updates.
    import('../node_modules/reveal.js/dist/theme/' + args.theme + '.css').then((css) => {

      try{
        Reveal.layout();
      }
      catch (e){
        console.warn("Reveal.layout() call failed.")
      }
    
    }).catch((err) => {
      console.warn("Failed CSS import: ", err);
    });

  }, [args.theme]);

  useEffect(() => {
    const config = setupConfig(configStr)
    
    try {
      Reveal.destroy();
    }
    catch (e) {
    }
    Reveal.initialize(config).then(() => {
      // reveal.js is ready
      
      // For some yet to be determined reason, the highlight plugin is not initialized.
      // Setting highlight config option highlightOnLoad to true (before passing to initialize function)
      // does not work
      // To Do: make sure the highlight plugin only changes the HTML involving the code once instead of many times.
      // Possible solution is to make a change to the plugin init function.
      let highlighter = Reveal.getPlugin('highlight') as any;
      if (highlighter){
        highlighter.init(Reveal);
      }
      
      const initState = JSON.parse(initStateStr);
      if(Object.keys(initState).length !== 0){
        Reveal.setState(initState);
      }

      if(!args['display_only']){
        // Send slide position indecies back to Streamlit on initialization and on slide change
        const currState = Reveal.getState();
        Streamlit.setComponentValue(currState);
        Reveal.on( 'slidechanged', event => {

          const tempState = Reveal.getState();
          Streamlit.setComponentValue({indexh: (event as any).indexh, indexv: (event as any).indexv, indexf: tempState.indexf, paused: tempState.paused, overview: tempState.overview});
        });
        
        Reveal.on( 'fragmentshown', event => {
          // event.fragment = the fragment DOM element
          const tempState = Reveal.getState();
          Streamlit.setComponentValue(tempState);
        } );
        Reveal.on( 'fragmenthidden', event => {
          // event.fragment = the fragment DOM element
          const tempState = Reveal.getState();
          Streamlit.setComponentValue(tempState);
        } );
        Reveal.on( 'overviewshown', event => {
          // event.overview = the overview DOM element
          const tempState = Reveal.getState();
          Streamlit.setComponentValue(tempState);
        } );
        Reveal.on( 'overviewhidden', event => {
          // event.overview = the overview DOM element
          const tempState = Reveal.getState();
          Streamlit.setComponentValue(tempState);
        } );
        Reveal.on( 'paused', event => {
          // event.fragment = the fragment DOM element
          const tempState = Reveal.getState();
          Streamlit.setComponentValue(tempState);
        } );
        Reveal.on( 'resumed', event => {
          // event.fragment = the fragment DOM element
          const tempState = Reveal.getState();
          Streamlit.setComponentValue(tempState);
        } );
      }
    });

    return () => {
      // code to run on component unmount goes here
      Reveal.destroy();  
    }
  }, []);

  // Reconfigure reveal.js if config changes
  useEffect(() => {
    const existingPlugins = Reveal.getPlugins();
    const config = setupConfig(configStr)

    // Add and register plugins that are not already loaded
    let existingPluginsList : string[] = Object.values(existingPlugins).map((plugin: any) => plugin.id);
    if('plugins' in args["config"]){
      const plugins = args["config"]["plugins"];
      (plugins as string[]).forEach((plugin: string) => {
        if (plugin && existingPluginsList.indexOf(plugin) === -1){
          Reveal.registerPlugin((includedPlugins as any)[plugin]);
        }
      });

      //// Remove plugins that are no longer in the list (does not work yet..some signs there is a bug in Reveal.Plugin)
      // Object.values(existingPlugins as {[id: string]: Reveal.Plugin;}).forEach((plugin: any) => {
      //   if (plugin.id && plugin.id !=='markdown' && plugins.indexOf(plugin.id) === -1){
      //     console.log("destroy plugin: " + plugin.id);
      //     if( typeof plugin.destroy === 'function' ) {
      //       plugin.destroy();
      //     }
      //   }
      // });
    }
    // Reconfigure reveal.js
    Reveal.configure(config);
  }, [configStr, args["allow_unsafe_html"]]);

  useEffect(() => {
    const initState = JSON.parse(initStateStr);
    if (Reveal.isReady() && Object.keys(initState).length !== 0){
      Reveal.setState(initState);
    }
  }, [initStateStr]);

  useEffect(() => {
    if (Reveal.isReady()){
      if (disabled){
        Reveal.togglePause(true);
        let viewport = Reveal.getViewportElement();
        if (viewport){
          viewport.style.pointerEvents = "none";
        }
      }
      else {  
        Reveal.togglePause(false);
        let viewport = Reveal.getViewportElement();
        if (viewport){
          viewport.style.pointerEvents = "auto";
        }
      }
    }
  }, [disabled]);

  //To do: add support for commands (i.e. control slides from Streamlit)
  //-----------------
  // useEffect(() => {
  //   const commands = JSON.parse(commandStr)
  //   if (Array.isArray(commands) && commands.length > 0 && Reveal.isReady()){
  //     commands.forEach((command: any) => {
  //       if (typeof command === "string" && command in simpleCommands){
  //         (simpleCommands as any)[command]();
  //       }
  //       else if (Array.isArray(command) && command.length > 0 && typeof command[0] === "string" && command[0] in commandsWithArgs){
  //         if (command[0] === "slide"){
  //           if (command.length === 3){
  //             Reveal.slide(command[1], command[2]);
  //           }
  //           else if (command.length === 4){
  //             Reveal.slide(command[1], command[2], command[3]);
  //           }
  //           else {
  //             console.warn("Invalid slide command: slide command array must have 3 or 4 elements.");
  //           }
  //         }
  //         else {
  //           (commandsWithArgs as any)[command[0]](command[1]);
  //         }
  //       }
  //       else {
  //         console.warn("Invalid command: command must be a string or an array containing a string as its first element.");
  //       }
  //     });
  //   }
  //   else if (!Array.isArray(args["commands"])) {
  //     console.warn("Invalid commands property value: commands must be an array containing at least one command.");
  //   }
  // }, [commandStr]);

  /**
   * resizeObserver observes changes in elements its given to observe and is used here
   * to communicate to streamlit the height of the component that has changed
   * so that streamlit can adjust the iframe containing the component accordingly.
   */
  const resizeObserver = new ResizeObserver((entries: any) => {
    // If we know that the body will always fully contain our component (without cutting it off)
    // then we can use docuemnt.body height instead
    if (args["height"] === "auto" || typeof args["height"] !== "number"){
      Streamlit.setFrameHeight((entries[0].contentBoxSize.blockSize ?? entries[0].contentRect.height)); 
      if (Reveal.isReady()){
        Reveal.layout();
      }
    }
    else {
      Streamlit.setFrameHeight(args["height"]);
      if (Reveal.isReady()){
        Reveal.layout();
      }
    }
    
  })

  const observe = (divElem: any) => {
    divElem ? resizeObserver.observe(divElem as HTMLDivElement) : resizeObserver.disconnect();
  }

  if (args["allow_unsafe_html"]) {
    return (
      <>
        <GlobalCSS inject={args.css}/>
        <div ref={observe} className="slides" dangerouslySetInnerHTML={{__html: args["content"]}}>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <GlobalCSS inject={args.css}/>
        <div ref={observe} className="slides">
          <section data-markdown={""} {...args["markdown_props"]}>
            <script type={"text/template"}>
              {args["content"]}
            </script>
          </section>
        </div>
      </>
    )
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(RevealSlides)
