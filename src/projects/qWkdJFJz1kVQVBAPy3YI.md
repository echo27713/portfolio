---
title: Thermostat app for non-morning person
description: By Eunjung Cho
---
### **UX Case study - Google Nest Thermostat**

**Challenge**: Discover pain points of the current app and propose solutions to improve user experience

**UX research deliverables**: Target users and their goals, User activity diagram, UX problem analysis

**Design deliverables**: Task flows, Prototype

![](/content/writing/qWkdJFJz1kVQVBAPy3YI-1.png)
![](/content/writing/qWkdJFJz1kVQVBAPy3YI-2.png)
![](/content/writing/qWkdJFJz1kVQVBAPy3YI-3.png)

**Google Nest thermostat is a smart thermostat that optimizes heating and cooling of homes to conserve energy.**

*I did some desk research on Nest community forum and scenario based ux reviews on the existing app. Based on the findings, I created a primary persona, their goals and tasks around heating/cooling their home.*

## Primary persona

![](/content/writing/qWkdJFJz1kVQVBAPy3YI-4.png)
![](/content/writing/qWkdJFJz1kVQVBAPy3YI-5.png)
![](/content/writing/qWkdJFJz1kVQVBAPy3YI-6.png)
![](/content/writing/qWkdJFJz1kVQVBAPy3YI-7.png)

## User's goals

1. Adjust indoor temperature easily and feel pleasant/comfortable all the time

2. Lower the energy bill as much as possible to save energy and money

## User's tasks to achieve their goals

After defining user's goals, I started to map user's activities that our persona needs to perform in order to achieve their goals. Also started to map user's activities with screens and contextual menus needed.

(If the figma diagram above doesn't show well due to a technical constraint, [please see it here](https://www.figma.com/file/uuK1Q7XNGP1wkpKfnMiAgm/user-activity-diagram%3A-google-nest-thermostat?node-id=0%3A1))

## Problems - how well the current app satisfy user's goals?

Based on the user's goals and tasks showing above, I walked through the current app and found some ux problems.

### 1. Due to lack of natural mapping, new users get easily confused with  how to heat/cool their home using the existing UI.

![](/content/writing/qWkdJFJz1kVQVBAPy3YI-8.png)

---

### 2. Overseeing and setting schedule feels overly complicated because users have to get through too many steps than it is necessary.

![](/content/writing/qWkdJFJz1kVQVBAPy3YI-9.png)

---

### 3. Allowing users to preset temperatures is great because it could simplify user's workflow of setting schedules. However once it is set, it is hard to modify it later, because the entry point is hidden.

![](/content/writing/qWkdJFJz1kVQVBAPy3YI-10.png)

---

### 4. It is hard to setup a temporary schedule for a holiday(no-school day) or vacation days. Current UX doesn't support this task well.

Let's say that it is Sunday now and Monday tomorrow is a holiday and we don't have to wake up early. If I copy Sunday's schedule to Monday, Monday schedule might be adjusted easily. However, if the regular Monday schedule differs from the rest of the weekdays schedule, I have to set Monday schedule again after the holiday.

![](/content/writing/qWkdJFJz1kVQVBAPy3YI-11.png)

---

## Scope of the design project

Although there are handful UX issues worth to address, I wanted to keep this case study scope small. According to the severity of an issue, problem 1 seems less severe than problem 2, 3 and 4. Since I wanted to solve an issue which could create a bigger impact on users, I decided to improve the UX of setting schedule/temperature. Also tried to add a new convenient way to modify a schedule temporarily for holidays(no school days), because holidays come often and I feel that it should be considered a significant part of setting schedules.

**Tasks to improve**

1. Set up weekly schedule — edit time / modify temperature

2. Override to a holiday day schedule temporarily + bring the regular schedule back after holiday

3. Set a vacation mode for x days + bring the regular schedule back after vacation

## Design ideation

### **Idea1**: Turn schedules page into a Calendar like UI with a direct-manipulation interaction.

In order to oversee weekly schedule easily, make schedules page look like a weekly calendar UI with time blocks. This way users don't have to click multiple times to see data from different days. Let users stretch/shrink a time block to modify start time/end time.

![](/content/writing/qWkdJFJz1kVQVBAPy3YI-12.png)

![task: Edit time block](/content/writing/qWkdJFJz1kVQVBAPy3YI-13.mp4)
![task: Modify temperature](/content/writing/qWkdJFJz1kVQVBAPy3YI-14.mp4)

### **Idea2**: Provide an option for a override each day schedule to holiday schedule/ Back to regular schedule

![](/content/writing/qWkdJFJz1kVQVBAPy3YI-15.png)

![Override to holiday schedule](/content/writing/qWkdJFJz1kVQVBAPy3YI-16.mp4)
![Back to regular schedule](/content/writing/qWkdJFJz1kVQVBAPy3YI-17.mp4)