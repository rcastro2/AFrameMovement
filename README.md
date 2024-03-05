AFrame Movement
==============

<a href="https://github.com/c-frame/aframe-physics-system" target="_blank">aframe-physics-system</a> is a JavaScript library which can be used to simulate physics on various components created using <a href="https://aframe.io/" target="_blank">
aframe.io</a>, a web framework for building 3D/AR/VR experiences.  This project explores the ability to add physics components to the camera so that the player may interact with the world.  Currently the project explores preventing the camera from 
walking through walls, pushing dynamic objects and jumping on to static and dynamic objects.  

<b>Movement</b>
UP ARROW or W: Move in the direction the camera is facing. <br>
LEFT / RIGHT ARROW or A / D: Strafe movement left or right. <br>
DOWN ARROW or S: Move in the opposite direction the camera is facing.<br>
SPACE: Jumping (Under Development)<br>

<b>Comments</b>
By using syncToPhyics() function from the aframe-physics-system, the movement can be controlled through JavaScript while ahering to the rules of the physics system.  This prevents the camera from moving through static bodies and allows the camera 
to push dynamic bodies. The jumping functionality has proven to be more challenging and its behavior is currently inconsistent.

