# learning-threejs

## What is WebGL and why use Three.js

### What is WebGL

**WebGL** is a JavaScript API that renders triangles in a canvas

It's fast because it uses the **Graphic Processing Unit (GPU)** of the visitor. The GPU can do thousands of parallel calculations.

Once the model's points are well placed, the GPU needs to draw each visible pixel of those triangles. The instructions to place the points and draw the pixels are written in what we call **shaders**.

We also need to provide data to these shaders. For example: how to place the points according to the model transformations and the camera's properties. These are called **matrices**.

Drawing a single triangle on the canvas would take at least 100 lines of code. But native WebGL benefits from existing at a low level, very close to the GPU. This enables excellent optimizations and more control.

### What is ThreeJS

**Three.js** is a JavaScript library under MIT license that works right above WebGL. The library's goal is to drastically simplify the process of handling all of what we just stated.

### How to render

We need 4 element to render

- A scene
- Some Objects
- A camera
- A renderer
