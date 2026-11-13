# REC AI&DS Grade Calculator

A private, single-page TO/LOT grade calculator, target-grade planner, and GPA/CGPA calculator for Rajalakshmi Engineering College AI&DS students. The header includes the AADHI mascot mark and the page credits its designer. Open `index.html` in a current browser; it needs no setup, login, server, or internet connection.

## How to use

1. Optionally filter the subject list by semester and select an R2023 AI&DS subject. Its TO/LOT type is selected automatically. Choose **Other — enter a subject name** to enter a course that is not in the catalogue.
2. Select **Theory Only (TO)** or **Lab Oriented Theory (LOT)** when entering an unlisted subject. Only the matching assessment fields are shown.
3. Optionally enter a student name; this appears only on the current page.
4. Enter assessment marks, using decimals if needed. The weighted internal marks, end-semester marks, final total, and grade update immediately.
5. Choose **I was absent** for a zero total and grade U. Use **Clear** to remove entries or **Try a sample** to see a worked example.
6. In **Target grade**, choose a grade to estimate the ESE marks needed using your entered internal assessment marks.
7. In **GPA & CGPA**, choose each subject from the semester-grouped curriculum dropdown. Its credits fill automatically; choose **Other** to enter an unlisted course and its credits. REC grade points are prefilled from the supplied grading table and can be edited if your institution uses a different scale. You can view a previous CGPA by itself or combine it with current-semester courses.
8. Copy or print your current result when you want to keep a personal copy.

Marks, names, grade points, and course entries are not saved to browser storage, uploaded, or transmitted. Closing or refreshing the page clears them. Copying, printing, or sharing a result is always initiated by you.

The marks-entry subject dropdown is seeded from the R2023 AI&DS catalogue and lists coded TO/LOT subjects. The GPA dropdown includes all 51 curriculum entries shown for Semesters I–VIII in pages 5–8 of the attached R2023 curriculum PDF, including laboratory, employability, elective, project, and non-credit courses. Curriculum credits fill automatically; zero-credit courses are excluded from GPA and CGPA. Custom subjects remain available.

## Calculation rules

**Theory Only (TO)**

- Internal /40 = `(CAT1 + CAT2 + Quizzes) / 200 × 40`
- End semester /60 = `ESE Theory / 100 × 60`
- Total /100 = internal + end semester

**Lab Oriented Theory (LOT)**

- Theory internal /25 = `(CAT1 + CAT2 + Quizzes) / 200 × 25`
- Laboratory internal /25 = `(Lab Internal + Model Lab) / 100 × 25`
- End-semester theory /25 = `ESE Theory / 100 × 25`
- End-semester lab /25 = `ESE Lab / 100 × 25`
- Total /100 = sum of all four weighted components

Component maximums are CAT1 75, CAT2 75, quizzes 50, lab internal 75, model lab 25, ESE theory 100, and ESE lab 100. Negative marks and marks above these limits are rejected.

Grades use the unrounded total: S ≥91, A+ ≥81, A ≥71, B+ ≥66, B ≥61, C+ ≥56, C ≥50, and U below 50. The supplied REC grade-point table is separate: S = 10, A+ = 9, A = 8, B+ = 7, B = 6.5, C+ = 6, C = 5, and U = 0, on a 10-point scale.

## Target grade and GPA tools

The target planner calculates how many marks are needed on the end-semester assessment to reach the selected grade threshold, using the internal marks currently entered. For LOT, it displays the required mark on **each** ESE exam when the theory and lab scores are equal; a different split may also reach the target. An unattainable target is called out rather than capped silently. It is an estimate based on entered marks, not an official grade.

The GPA/CGPA calculator is prefilled with the REC 10-point grade mapping shown above; the maximum and individual grade points remain editable for institutions with a different scale. Select a curriculum subject to fill its credits automatically, then choose its grade; custom courses can be entered manually (up to 10 credits per course). Semester GPA is `Σ(course credits × course grade point) ÷ Σ(course credits)`. For CGPA, optionally provide both your previous CGPA and previously completed credits; CGPA then combines their quality points with this semester. If no current-semester courses are entered, the previous CGPA is still shown as the cumulative result. The display distinguishes current-semester credits from total cumulative credits. Grade points, marks, and course information exist only for the current page session.

## Additional example checks

- **TO target:** Internal marks 37.60 / 40, target S (91) → at least 89.00 / 100 in ESE Theory.
- **LOT target:** Internal marks 45.625 / 50, target S (91) → at least 90.75 / 100 on each ESE when the theory and lab marks are equal.
- **10-point GPA scale:** A+ = 9, B+ = 7; credits 4 and 3 → semester GPA 8.14. Previous CGPA 8 over 30 credits → updated CGPA 8.03.
- **4-point GPA scale:** A+ = 3.6, B+ = 2.8; credits 4 and 3 → semester GPA 3.26. Previous CGPA 3.2 over 30 credits → updated CGPA 3.21.
- **Previous CGPA only:** CGPA 8 over 30 completed credits with no current courses → cumulative result 8.00, semester GPA blank, total CGPA credits 30.
- **Curriculum dropdown:** 51 entries across eight semesters sum to 160 curriculum credits; selecting MA23116 fills 4 credits, and selecting a zero-credit non-credit course excludes it from GPA.
- **REC grade-point table:** S 10, A+ 9, A 8, B+ 7, B 6.5, C+ 6, C 5, and U 0; clearing GPA entries restores these defaults.

## Example test cases

- **TO maximum:** CAT1 75, CAT2 75, quizzes 50, ESE theory 100 → internal 40.00, end semester 60.00, total 100.00, grade S.
- **TO sample:** CAT1 72, CAT2 70, quizzes 46, ESE theory 94 → internal 37.60, end semester 56.40, total 94.00, grade S.
- **LOT maximum:** CAT1 75, CAT2 75, quizzes 50, lab internal 75, model lab 25, ESE theory 100, ESE lab 100 → four weighted components of 25.00, total 100.00, grade S.
- **LOT sample:** CAT1 72, CAT2 68, quizzes 45, lab internal 68, model lab 22, ESE theory 90, ESE lab 93 → internal 45.63, end semester 45.75, total 91.38, grade S.
- **Invalid mark:** enter a negative component or exceed its maximum → the input is highlighted and no result is calculated until corrected.
- **Absent:** select “I was absent” → total 0.00 and grade U.
