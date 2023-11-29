# learning-threejs

deploy website : https://devian4748.github.io/learning-threejs/

## What is WebGL and why use Three.js

### What is WebGL

**WebGL** is a JavaScript API that renders triangles in a canvas

### What is ThreeJS

**Three.js** is a JavaScript library under MIT license that works right above WebGL. The library's goal is to drastically simplify the process of handling all of what we just stated.

### How to render

We need 4 element to render

- A scene
- Some Objects
- A camera
- A renderer

## Transform objects

There are 4 properties to transform objects. All classes that inherit from the Object3D class possess those properties.

- position
- scale
- rotation
- quaternion

### Position

The position possesses 3 essential properties. The direction of each axis is purely arbitrary. As for the meaning of 1 unit, it's up to you.

- x
- y
- z

The position property is an instnace of the Vector3 class.

#### Axes helper

The AxesHelper will display 3 lines corresponding to the x, y and z axes, each one starting at the center of the scene and going in the corresponding direction.

### Scale

Scale is a Vector3. By default, x, y and z are equal to 1.

### Rotate

There are two ways of handling a rotation. Three.js supports both, and updating one will automatically update the other.

- rotation
- quaternion

_Rotation_

- **Euler**
- The value of these axes is expressed in radians.

**Check**

> **Gimbal Lock**

_Quaternion_

The quaternion property also expresses a rotation, but in a more mathematical way, which solves the order problem.

### Scene graph

You can group related objects with Group class.

## Animations

**Check**

> **FPS (Frame Per Second)**

### window.requestAnimation(...)

requestAnimationFrame will execute the function you provide on the next frame.

### Adaptation to the framerate

To adapt the animation to the framerate, we need to know how much time it's been since the last tick.

You can use

- Clock Class
- Timestamp

### Using a library

- GSAP

## Cameras

There are several types of cameras.

- Camera
- ArrayCamera
- StereoCamera
- CubeCamera
- OrthographicCamera
- PerspectiveCamera

### PerspectiveCamera

PerspectiveCamera class needs some parameters to be instantiated

- Field of view
- Aspect ratio
- Near and far

**Check**

> **z-fighting**

### OrthographicCamera

OrthographicCamera class needs some parameters to be instantiated. Instead of a field of view, you must provide how far the camera can see in each direction

- left
- right
- top
- bottom
- near
- far

left, right, top, bottom area ==== renderer area

### Custom controls

**Control with Mouse**

1. Get mouse coordinates using mousemove event
2. Transform Object in animation loop

### Built-in controls

- DeviceOrientationControls
- FlyControls
- FirstPersonControls
- PointerLockControls
- OrbitControls
- TrackballControls
- TransformControls
- DragControls

**OrbitControls**

You can now

- drag and drop
- move camera
- zoom in or out

Feature

- Target
- Damping

## FullScreen and Resizing

### Fit in the viewport

- Using window.innerSizes
- Styling - margin, padding, outline, overflow

### Handle resize

- Using window event handler - resize
  - Update sizes
  - Update camera aspect ratio and projection matrix
  - Update renderer
  - Update renderer pixel ratio

### Handle pixel ratio

- Using window.devicePixelRatio
  - 1 : 1 times
  - 2 : 4 times
  - 3 : 9 times

### Handle fullscreen

- Using window.fullscreenElement
- Using element.requestFullscreen()
- Using document.exitFullscreen();

## Geometries

### What is geometry

In Three.js, geometries are composed of vertices and faces

We can use geometries to create meshes or to form particles

### The different built-in geometries

- BufferGeometry
- BoxGeometry
- CapsuleGeometry
- CircleGeometry
- ConeGeometry
- CylinderGeometry
- DodecahedronGeometry
- ExtrudeGeometry
- IcosahedronGeometry
- LatheGeometry
- OctahedronGeometry
- PlaneGeometry
- RingGeometry
- ShapeGeometry
- SphereGeometry
- TetrahedronGeometry
- TorusGeometry
- TorusKnotGeometry
- TubeGeometry

### BoxGeometry

The BoxGeometry has 6 parameters

- width
- height
- depth
- widthSegments
- heightSegments
- depthSegments

Subdivisions correspond to how much triangles should compose the face.

### Creating your own buffer geometry

If the geometry isn't too complex, we can build it ourself by using BufferGeometry.

- Using Float32Array
- Using BufferAttribute as position and Using BufferGeometry

**Check**

> **Index**

## Debug UI

Using [lil-gui](https://lil-gui.georgealways.com/)

## Textures

### What are textures

Textures are images that will cover the surface of your geometries.

### PBR(Physically Based Rendering)

Those textures (especially the metalness and the roughness) follow what we call PBR principles.

- Color(or albedo)
- Alpha
- Height
- Normal
- Ambient occulsion
- Metalness
- Roughness

### How to load textures

1. Getting the URL of the image
2. Loading the image

or

- Using TextureLoader
- Using LoadingManager

### UV unwrapping

**UV coordinate**

> UV coordinates in the context of 3D modeling and graphics (like in ThreeJS) are a way to map a 2D texture onto the surface of a 3D model.

**UV unwrapping**

> The texture is being stretched or squeezed in different ways to cover the geometry.

### Transforming the texture

- repeat
- offset
- rotation

### Filtering and Mipmapping

**Mipmapping**

> Mipmapping (or "mip mapping" with a space) is a technique that consists of creating half a smaller version of a texture again and again until you get a 1x1 texture. All those texture variations are sent to the GPU, and the GPU will choose the most appropriate version of the texture.

- Minification filter
- Magnification filter

### Texture format and optimisation

- The weight
- The size
- The data

## Material

Materials are used to put a color on each visible pixel of the geometries.

The algorithms that decide on the color of each pixel are written in programs called **shaders**.

- MeshBasicMaterial
  - map
  - color
  - wireframe
  - opacity
  - alphamap
  - side
- MeshNormalMaterial  
  Normals are information encoded in each vertex that contains the direction of the outside of the face.
- MeshMatcapMaterial
- MeshDepthMaterial
- MeshLambertMaterial
- MeshPhongMaterial
- MeshToonMaterial
- MeshStandardMaterial  
  The MeshStandardMaterial uses physically based rendering principles.
- MeshPhysicalMaterial

## 3D Text

Three.js already supports 3D text geometries with the TextGeometry class. The problem is that you must specify a font, and this font must be in a particular json format called typeface.

### How to load font

- Using Font Loader
- Using TextGeometry

### Center the text

- Calculate Bevel size, thickness with boundingBox
- Using the BufferGeometry class method : center()

**bounding**

> The bounding is the information associated with the geometry that tells what space is taken by that geometry. It can be a box or a sphere.
