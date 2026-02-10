---
title: "Building a Robot Bartender"
description: "How I turned a Sawyer manipulator into a bartender and built a no-code system for students to control it"
video: "https://youtu.be/rq2TTOWhma8?si=0zAll2QjgnIzqZab"
github: "https://github.com/loanBRNT/sawyer_vision_bartender"
tags: ["Python", "ROS/ROS2", "Detection", "Control"]
types: ["internship"]
order: 2
---

This project was developed during a research internship at Ostfalia University of Applied Sciences (Germany).
The objective was to design a complete robotic bartender system using a [Sawyer manipulator](https://www.rethinkrobotics.com/sawyer), integrated with a [Pepper robot](https://www.aldebaran.com/en/pepper) acting as a waiter. My focus was entirely on the Sawyer application.

## System Overview

I treated this as a full-stack robotics problem:

- **Perception:** I trained and integrated YOLOv5 to identify bottles and cups. While being reliable under the shifting lights of a lab environment.
- **Manipulation:** I designed the grasp sequencing to handle different bottle shapes and ensure a steady pour without "spilling".
- **The Bridge (No-Code):** I built a Node-RED interface that abstracted the ROS complexity. It allowed Master’s students to "program" the robot for their own experiments.

It was one of my first autonomous project on a real robot. Supervisors let me explore any solution that I want and I really faced the curse of any real robots application: race conditions 🫡 and timing issues.

## Technical Challenges & Design Choices

- **Robust perception**: bottle and cup detection needed to be reliable under varying lighting and clutter.
- **Grasp sequencing**: handling bottles safely while ensuring stable pouring.
- **Human-in-the-loop coordination**: synchronizing actions with Pepper or Humans required explicit confirmation handling.
- **Usability**: the Node-RED interface had to abstract ROS complexity while remaining expressive for students.

## Outcome

The final system was able to autonomously execute drink-serving sequences, from order recognition to cup delivery, while remaining configurable through a no-code interface.

This project demonstrates my early experience with:

- full-stack robotic systems
- perception-driven manipulation
- ROS-based orchestration
- designing interfaces for non-roboticists
