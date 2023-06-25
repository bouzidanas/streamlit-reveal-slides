import streamlit as st
import reveal_slides as rs

sample_markdown = r"""
# Reveal.js + Streamlit
Add <a target="_blank" href="https://revealjs.com/">Reveal.js</a> presentations to your Streamlit app.
---
## Installation
`pip install streamlit-reveal-slides`

\[[GitHub](https://github.com/bouzidanas/streamlit.io/tree/7748c2a97f4ca54ce4b8120a054d6c66e8be296d/streamlit-reveal-slides)\] \[[PyPI](https://pypi.org/project/streamlit-reveal-slides/)\]
---
## Presentation Features
- Create slides from markdown or markup <!-- .element: class="fragment" data-fragment-index="0" -->
- Touch, mouse, and keyboard navigation <!-- .element: class="fragment" data-fragment-index="1" -->
- Fullscreen and overview modes <!-- .element: class="fragment" data-fragment-index="2" -->
- Search and Zoom (plugins) <!-- .element: class="fragment" data-fragment-index="3" -->
- Display LaTeX and syntax highlighted code (plugins) <!-- .element: class="fragment" data-fragment-index="4" -->
---
## Slide Content Creation
A paragraph with some text and a markdown [link](https://hakim.se). 
Markdown links get displayed within the parent iframe.
--
Another paragraph containing the same <a target="_blank" href="https://hakim.se">link</a>.
However, this link will open in a new tab instead. 
This is done using an HTML `<a>` tag with `target="_blank"`.
---
## Backgrounds
Reveal supports four different types of backgrounds: color, image, video and iframe.
--
<!-- .slide: data-background-color="#283747" -->
Change the background to a solid color using the `data-background-color` attribute.
--
<!-- .slide: data-background-video="https://bouzidanas.github.io/videos/pexels-cottonbro-9665235.mp4" data-background-video-loop data-background-video-muted -->
Add a video as the background using the `data-background-video` attribute. Add `data-background-video-loop` to loop the video in the background and add `data-background-video-muted` to mute it.
---
## Math Expressions
This following is an example of an inline math equation: $e^{i\pi} + 1 = 0$.
--
## The Lorenz Equations

$$
\begin{aligned}
\dot{x} & = \sigma(y-x) \\\\
\dot{y} & = \rho x - y - xz \\\\
\dot{z} & = -\beta z + xy
\end{aligned}
$$
---
## Code blocks
```js [1-2|3|4]
let a = 1;
let b = 2;
let c = x => 1 + 2 + x;
c(3);
```
---
## Slide Fragments
This sentence is placed in a fragment with `data-fragment-index="0"` 
<!-- .element: class="fragment" data-fragment-index="0" -->

This is the third fragment in the slide that will appear because `data-fragment-index` is set to `1` 
<!-- .element: class="fragment" data-fragment-index="1" -->

This sentence appears by default when you transition into and out of this slide 
---
## Configuring the Presentation
The presentation can be configured using the `config` argument of the `slides` function. Its as simple as passing a dictionary with the reveal configuration options.
---
## La fin
"""
st.markdown("## STREAMLIT REVEAL.JS COMPONENT")
with st.sidebar:
    st.header("Component Parameters")
    theme = st.selectbox("Theme", ["black", "black-contrast", "blood", "dracula", "moon", "white", "white-contrast", "league", "beige", "sky", "night", "serif", "simple", "solarized"])
    height = st.number_input("Height", value=500)
    st.subheader("Slide Configuration")
    content_height = st.number_input("Content Height", value=900)
    content_width = st.number_input("Content Width", value=900)
    scale_range = st.slider("Scale Range", min_value=0.0, max_value=5.0, value=[0.1, 3.0], step=0.1)
    margin = st.slider("Margin", min_value=0.0, max_value=0.8, value=0.1, step=0.05)
    plugins = st.multiselect("Plugins", ["highlight", "katex", "mathjax2", "mathjax3", "notes", "search", "zoom"], [])
    st.subheader("Initial State")
    hslidePos = st.number_input("Horizontal Slide Position", value=0)
    vslidePos = st.number_input("Vertical Slide Position", value=0)
    fragPos = st.number_input("Fragment Position", value=-1)
    overview = st.checkbox("Show Overview", value=False)
    paused = st.checkbox("Pause", value=False)

# Add the streamlit-reveal-slide component to the Streamlit app.                    
currState = rs.slides(sample_markdown, 
                    height=height, 
                    theme=theme, 
                    config={
                            "width": content_width, 
                            "height": content_height, 
                            "minScale": scale_range[0], 
                            "center": True, 
                            "maxScale": scale_range[1], 
                            "margin": margin, 
                            "plugins": plugins
                            }, 
                    initial_state={
                                    "indexh": hslidePos, 
                                    "indexv": vslidePos, 
                                    "indexf": fragPos, 
                                    "paused": paused, 
                                    "overview": overview 
                                    }, 
                    markdown_props={"data-separator-vertical":"^--$"}, 
                    key="foo")

if currState["indexh"] == 0:
    st.markdown("Reveal.js is an open source HTML presentation framework. It enables anyone with a web browser to create fully-featured and beautiful presentations for free. \n\nThe framework comes with a broad range of features including nested slides, Markdown support, Auto-Animate, PDF export, speaker notes, LaTeX support and syntax highlighted code.")
elif currState["indexh"] == 2:
    if currState["indexf"] == 0:
        st.markdown("_(see later slides for details and examples)_")
    elif currState["indexf"] == 1:
        st.markdown("- You can swipe horizontally or vertically to navigate through a presentation on any touch-enabled device. \n- You can use the `space` or arrow keys on your keyboard to navigate as well. Press `Shift` + `/` to see all keyboard shortcuts. \n- Navigating with the mouse is as simple as clicking the directional arrows near the edges or corners of the slides.")
    elif currState["indexf"] == 2:
        st.markdown("- Press the `F` key on your keyboard to enter full-screen presentation mode. Press `ESC` to exit full-screen mode. \n- Press the `O` of `ESC` key to enter and exit overview mode")
    elif currState["indexf"] == 3:
        st.write(":arrow_left: Make sure to add the search and zoom plugins to activate these features.")
        st.markdown("- Press `Ctrl` + `Shift` + `F` keys on your keyboard to open and close the search dialog. \n- Press the `Alt` key and right click to zoom in and out on the region the mouse is hovering over.")
    elif currState["indexf"] == 4:
        st.markdown("_(see later slides for details and examples)_")
elif currState["indexh"] == 3:
    st.markdown('''This component allows for two ways of creating reveal.js presentations. \n1. [Markdown](https://revealjs.com/markdown/) \n2. [Markup](https://revealjs.com/markup/) \n\nThe primary way is using markdown. By default, the component `slide` function accepts a string containing markdown as input. Note that this streamlit component takes care of the html tags (`<section>`, `<textarea>`, `<script>`) for you so you only have to worry about the markdown content. The following is simple example of markdown for a presentation with three slides: ''')
    sample_markdown = '''## Slide 1
A paragraph with some text and a [link](https://hakim.se).
---
## Slide 2
---
## Slide 3'''
    st.code(sample_markdown, language="md")
    st.markdown('''The second way is by providing a string containing the markup that goes inside the `<div class="slides">` element and setting the `slide` function's `allow_unsafe_html` argument to `True`. The latter is what tells the component to expect markup instead of markdown.''')
    sample_html = '''<div class="reveal">
  <div class="slides">
    <section>Horizontal Slide</section>
    <section>
      <section>Vertical Slide 1</section>
      <section>Vertical Slide 2</section>
    </section>
  </div>
</div>'''
    st.code(sample_html, language="html")
    st.warning("WARNING!! The markup you provide is directly injected via the `dangerouslySetInnerHTML` property of the enclosing `div`. This means that you are responsible for ensuring that the markup is safe and does not contain any malicious code. The component does not do any sanitization of the markup.")
elif currState["indexh"] == 4:
    st.markdown("For more examples of backgrounds, see [here](https://revealjs.com/backgrounds/).")
    st.markdown("To change the background in markdown, add a comment to the slide that obeys the following syntax:")
    st.code('<!-- .slide: data-background-color="#283747" -->', language="md")
    st.markdown("Make sure to add all the `data-` attributes you require after the `.slide:`")
elif currState["indexh"] == 5:
    st.write(":arrow_left: Make sure to add/include the math plugin so that the latex is properly processed and rendered. There are three built-in plugins that process latex:")
    st.write("1. `katex` - uses KaTeX to render math equations. \n2. `mathjax2` - uses MathJax2 to render math equations. \n3. `mathjax3` - uses MathJax3 to render math equations.")
    st.warning("WARNING!! Only one math plugin can be used at a time. Including more than one plugin will result in an error.")
elif currState["indexh"] == 6:
    st.markdown(":arrow_left: Make sure to add/include the highlight plugin for syntax highlighting. ")
    st.markdown("For individual line highlighting, add line numbers (separated by a comma if not consecutive) right after the three backticks and the programming language the code is written in. For example, to highlight lines 1, 2, 3, and 5:")
    st.code("```javascript [1-3,5]", language="md")
    st.markdown("You can easily generate fragments that step through different highlighted lines of code by chaining sets of line numbers together using a `|` character. The following example highlights lines 1-3 and then 2-4 in the next fragment:")
    sample_code_markdown = "```javascript [1-3|2-4]"
    st.code(sample_code_markdown, language="markdown")
    st.markdown("Also, make sure to close the code block with three more backticks on an empty line after the last line of code.")
elif currState["indexh"] == 8:
    st.markdown("Any option that you can pass to the `Reveal.initialize` and `Reveal.config` functions can be passed to the component (to configure the presentation) via the `config` argument of the component's `slides` function.")