---
theme: ./
# The layout default for the first slide is cover.
# You can change it.
layout: cover
# Specify a cover background image
# background: https://source.unsplash.com/collection/94734566/1920x1080
css: unocss
themeConfig:
  primary: '#d97706'
  primary-rgb: '217,119,6'
---

# Slidev Theme Easy

Cover background is random by default but can be configured

<div class="pt-12">
  <span @click="next" class="py-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: intro
class: opacity-75
---

# Intro layout

Specify the image with `image` and configure additional styles for the image with `class`.

The above image specifies transparency with `class: opacity-75`.
Also, use `left: false` to toggle the color block to the right.


---
layout: image-left
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
equal: true
imageFrame: true
---

# Theme Color

The theme color configuration needs to provide both HEX format and RGB format, in order to support the theme background with transparency.

## Usage

```md
---
themeConfig:
  primary: #ff0000
  primary-rgb: '255,0,0'
---
```


---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Image Right

Shows an image on the right side of the screen, the content will be placed on the left side.

## Usage

```md
---
layout: image-right

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-left

# equal or one third
equal: true

# show frame
imageFrame: false
---
```

---

# Theme Color

The theme color configuration needs to provide both HEX format and RGB format, in order to support the theme background with transparency.

```md
  ---
  themeConfig:
    primary: #ff0000
    primary: '255,0,0'
  ---
```


---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)
