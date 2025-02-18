---
title: Redesign of ChargePoint Fleet Enterprise Software
description: By Eunjung Cho
---
This project was part of the development of ChargePoint's next-generation enterprise software suites.

Designing Fleet Software for Real-Time Charging Activity: Tracking Multiple Depots Overview and Specific Single Depot Details

![Example Screenshot from Final Design: This single-depot view efficiently indicates which vehicles in the depot are at risk, enabling depot managers to quickly identify and address issues, ensuring timely dispatch of vehicles on their assigned routes.](/content/writing/6ggjU98JEQC15PStx4rh-1.png)

## Problem

In their push towards sustainability, public transit agencies aimed to electrify their bus fleets and partnered with ChargePoint for charging solutions. However, the initial enterprise fleet software from ChargePoint struggled to effectively deliver critical information, highlighting a need for improvements.

## Screenshots from The Existing Software:

![All Depots Overview Page: This page should aim to present a high-level overview of charging activities across multiple depots, yet it mistakenly highlights less important data such as depot's location with map thumbnails, rather than focusing on the critical information of real-time charging data in depots.](/content/writing/6ggjU98JEQC15PStx4rh-2.png)
![Charging Activity Data Table: The existing product displays charging activity and dispatch information on separate pages. This design requires users to toggle back and forth between the two to fully understand the day's operations and potential risks..](/content/writing/6ggjU98JEQC15PStx4rh-3.png)
![Dispatch Data Table: The table's text-heavy format fails to effectively highlight crucial information. Users struggle to immediately identify vehicles at risk, as it necessitates reading each entry line by line.](/content/writing/6ggjU98JEQC15PStx4rh-4.png)

## Redesigning All Depots Overview Page

![Design Round 1: Real-Time Charging Focus - Displays current charging vehicles and total power usage. However, the design struggles with scalability due to its reliance on raw data numbers. Effective visualization for small operations (under 50 vehicles) is achievable, but the challenge lies in accommodating larger fleets of 100+ vehicles.](/content/writing/6ggjU98JEQC15PStx4rh-5.png)
![Design Round 2: Enhanced with Percentage-Based Charging Data – This iteration, while incorporating raw figures, emphasizes percentage representations for charging status. However, the text and number-centric design leads to extended data processing times.](/content/writing/6ggjU98JEQC15PStx4rh-6.png)
![Final Design: This design met the goal to provide an at-a-glance overview of each depot's charging activity. The implementation of a donut chart for vehicle charging status and a bar graph for total power usage effectively conveys high-level information.](/content/writing/6ggjU98JEQC15PStx4rh-7.png)

## Final Design: All Depots Overview Page

Alongside the overview cards for each depot, the design now includes a right-column feature displaying active incident data from individual vehicles, providing urgent alerts.

![All depots view: When we click each depot card, we can get into one depot view.](/content/writing/6ggjU98JEQC15PStx4rh-8.png)

**In Focus: Color Coding**

Aiming for depot managers to swiftly identify severe issues in depots and vehicles, I used vivid red to highlight these critical concerns, contrasting with muted tones for all other statuses.

## Redesigning Single Depot Detail Page

![Design Round1: I improved the vehicle charging data table by adding block/route assignment data, enhancing user awareness of potential operational risks. However, the design remained text and number-heavy, lacking quick, insightful data visualization.](/content/writing/6ggjU98JEQC15PStx4rh-9.png)
![Design Round2: I merged charging session data with vehicle block assignment data into a time series graph, using bar graphs for clear insights not visible in traditional data tables. Additionally, as a summary at the top of the page, I incorporated a donut chart displaying vehicle statuses, providing an immediate, comprehensive overview.](/content/writing/6ggjU98JEQC15PStx4rh-10.png)
![Final Deisgn: I applied status colors to the bar graphs for enhanced differentiation and streamlined the visuals for a cleaner, more organized look.](/content/writing/6ggjU98JEQC15PStx4rh-11.png)
![Close-up: Upon clicking a bar graph, it expands to show additional details in a popover for in-depth information.](/content/writing/6ggjU98JEQC15PStx4rh-12.png)

## Final Design: Single Depot Detail Page

![](/content/writing/6ggjU98JEQC15PStx4rh-13.png)

---

## My Contributions

As the solo designer in the fleet pod, I led brainstorming sessions with cross-functional teams and delivered designs from initial low-fidelity sketches to refined designs through multiple design iterations. My varied design contributions played a crucial role in streamlining product/design decisions.\
\
Collaborating with the design system team, I contributed creating the concept of strategic color coding in data visualization.

This product is currently under active development and is targeted for launch in Spring 2024.
