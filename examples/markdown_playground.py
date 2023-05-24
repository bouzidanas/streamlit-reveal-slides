import streamlit as st
import reveal_slides as rs
from code_editor import code_editor

btn_settings_editor_btns = [{
    "name": "copy",
    "feather": "Copy",
    "hasText": True,
    "alwaysOn": True,
    "commands": ["copyAll"],
    "style": {"top": "0rem", "right": "0.4rem"}
  },{
    "name": "update",
    "feather": "RefreshCw",
    "primary": True,
    "hasText": True,
    "showWithIcon": True,
    "commands": ["submit"],
    "style": {"bottom": "0rem", "right": "0.4rem"}
  }]

reveal_snippets = [[{ "name": '--', "code": '\n---\n## New Horizontal Slide\n' },{ "name": 'new slide (horizontal)', "code": '\n---\n## New Horizontal Slide\n' },{ "name": '-', "code": '\n--\n## New Vertical Slide\n' },{ "name": 'new slide (vertical)', "code": '--\n## New Vertical Slide\n' }, { "name": '<!-- .s', "code": '<!-- .slide:  -->'}, { "name": '<!-- .e', "code": '<!-- .element: class="fragment" class="fragment" -->'},{ "name": 'slide attributes', "code": '<!-- .slide:  -->'}, { "name": 'element attributes', "code": '<!-- .element: class="fragment" class="fragment" -->'} ],""]

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

markdown_response_dict = code_editor(sample_markdown, lang="html", height = 16, snippets=reveal_snippets, buttons=btn_settings_editor_btns)
    
if markdown_response_dict['type'] == "submit" and len(markdown_response_dict['text']) != 0:
    sample_markdown = markdown_response_dict['text']

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

# Add the streamlit-reveal-slide component to the Streamlit app.                    
state = rs.slides(sample_markdown, 
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
                    markdown_props={"data-separator-vertical":"^--$"}
                    )