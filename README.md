streamlit reveal slides  [![Version](https://img.shields.io/pypi/v/streamlit-reveal-slides)](https://pypi.org/project/streamlit-reveal-slides/#history) [![Downloads](https://img.shields.io/pypi/dm/streamlit-reveal-slides)](https://pypi.org/project/streamlit-reveal-slides/#files) [![Component Demo](https://static.streamlit.io/badges/streamlit_badge_black_white.svg)](https://bouzidanas-streamlit-reveal-slidesexamplesmarkdown-demo-cindcb.streamlit.app/)
============

<p align="center">
  Create and add <a href="https://revealjs.com/">reveal.js</a> HTML presentations to your streamlit app!
</p>

![demo](https://github.com/bouzidanas/streamlit.io/assets/25779130/327fdefb-98e7-4798-887c-600092f86424)

<p align="center">
  [<a href="https://bouzidanas-streamlit-reveal-slidesexamplesmarkdown-demo-cindcb.streamlit.app/"> DEMO </a>] 
  [<a href="https://bouz-streamlit-reveal-slidesexamplesmarkdown-playground-614aww.streamlit.app/"> PLAYGROUND </a>]
</p>

## Installation
Install [streamlit-reveal-slides](https://pypi.org/project/streamlit-reveal-slides/) with pip:
```bash
pip install streamlit-reveal-slides
```
Alternatively, you can download the source from the [download page](https://pypi.org/project/streamlit-reveal-slides/#files) and after unzipping, install with:
```bash
python setup.py install
```
(make sure you are in the same directory as 'setup.py' in the unzipped folder).

## Usage
To add a reveal.js presentation to your Streamlit (python) app, import `reveal_slides` and then call the `slides` function with the presentation contents in markdown format:
```python
import streamlit as st
import reveal_slides as rs

response_dict = rs.slides(content_markdown)
```
The `slides` function also accepts presentation content composed using markup. However, you need to set the `allow_unsafe_html` argument to `True`. Please note that the component does not do any sanitization of the markup before injecting it into the HTML presentation. This means that you are responsible for ensuring that the markup is safe and does not contain any malicious code.
```python
# The default value for the allow_unsafe_html argument is False
response_dict = rs.slides(content_markup, allow_unsafe_html=True)
```



