(() => {
  "use strict";

  const MAX = {cat1:75,cat2:75,quizzes:50,labInternal:75,modelLab:25,eseTheory:100,eseLab:100};
  const COMPONENTS = {
    TO:["cat1","cat2","quizzes","eseTheory"],
    LOT:["cat1","cat2","quizzes","labInternal","modelLab","eseTheory","eseLab"]
  };
  const LABELS = {
    cat1:["CAT 1","Theory assessment"],
    cat2:["CAT 2","Theory assessment"],
    quizzes:["Quizzes","Theory assessment"],
    labInternal:["Lab Internal","Laboratory assessment"],
    modelLab:["Model Lab","Laboratory assessment"],
    eseTheory:["End Semester Theory","End-semester examination"],
    eseLab:["End Semester Lab","End-semester examination"]
  };
  const SUBJECTS = [
    {semester:"I",code:"HS23111",name:"Technical Communication I",credits:2,type:"TO"},
    {semester:"I",code:"MA23116",name:"Mathematical Foundations for AI",credits:4,type:"TO"},
    {semester:"I",code:"GE23117",name:"Heritage of Tamils",credits:1,type:"TO"},
    {semester:"I",code:"PH23132",name:"Physics for Information Science",credits:4,type:"LOT"},
    {semester:"I",code:"GE23131",name:"Programming using C",credits:4,type:"LOT"},
    {semester:"I",code:"EE23133",name:"Basic Electrical and Electronics Engineering",credits:4,type:"LOT"},
    {semester:"II",code:"MA23214",name:"Probability and Inferential Statistics",credits:4,type:"TO"},
    {semester:"II",code:"GE23217",name:"Tamils and Technology",credits:1,type:"TO"},
    {semester:"II",code:"GE23111",name:"Engineering Graphics",credits:4,type:"LOT"},
    {semester:"II",code:"IT23231",name:"Digital Principles and Computer Architecture",credits:4,type:"LOT"},
    {semester:"II",code:"CS23231",name:"Data Structures",credits:5,type:"LOT"},
    {semester:"III",code:"MA23313",name:"Discrete Mathematics for AI",credits:4,type:"TO"},
    {semester:"III",code:"AI23231",name:"Principles of Artificial Intelligence",credits:4,type:"LOT"},
    {semester:"III",code:"CS23331",name:"Design and Analysis of Algorithms",credits:4,type:"LOT"},
    {semester:"III",code:"CS23332",name:"Database Management Systems",credits:5,type:"LOT"},
    {semester:"III",code:"CS23333",name:"Object Oriented Programming Using JAVA",credits:4,type:"LOT"},
    {semester:"IV",code:"MA23434",name:"Optimization Techniques for AI",credits:4,type:"LOT"},
    {semester:"IV",code:"AI23331",name:"Fundamentals of Machine Learning",credits:4,type:"LOT"},
    {semester:"IV",code:"AI23431",name:"Web Technology and Mobile Application",credits:3,type:"LOT"},
    {semester:"IV",code:"AD23431",name:"Statistical Analysis and Computing",credits:3,type:"LOT"},
    {semester:"IV",code:"CS23431",name:"Operating Systems",credits:5,type:"LOT"},
    {semester:"IV",code:"CS23432",name:"Software Construction",credits:4,type:"LOT"},
    {semester:"V",code:"AD23531",name:"Big Data Architecture",credits:4,type:"LOT"},
    {semester:"V",code:"AD23532",name:"Principles of Data Science",credits:4,type:"LOT"},
    {semester:"V",code:"AI23531",name:"Deep Learning",credits:4,type:"LOT"},
    {semester:"V",code:"CS23532",name:"Computer Networks",credits:5,type:"LOT"},
    {semester:"VI",code:"AD23631",name:"Data Privacy and Security",credits:4,type:"LOT"},
    {semester:"VI",code:"AD23632",name:"Framework for Data and Visual Analytics",credits:4,type:"LOT"},
    {semester:"VI",code:"AD23633",name:"Generative AI",credits:3,type:"LOT"},
    {semester:"VII",code:"AD23731",name:"Foundations of Agentic AI",credits:3,type:"LOT"},
    {semester:"VII",code:"CS23633",name:"Cloud Computing",credits:3,type:"LOT"}
  ];
  const GPA_SUBJECTS = [
    ...SUBJECTS.map(subject=>({...subject,id:subject.code})),
    {id:"GE23123",semester:"I",code:"GE23123",name:"Engineering Practices: Electrical, Electronics and Computer Systems",credits:2},
    {id:"MC23111",semester:"I",code:"MC23111",name:"Indian Constitution and Freedom Movement",credits:0},
    {id:"HS23221-HS23222",semester:"II",code:"HS23221 / HS23222",name:"Technical Communication II / English for Professional Competence",credits:1},
    {id:"CS23221",semester:"II",code:"CS23221",name:"Python Programming Lab",credits:2},
    {id:"MC23112",semester:"III",code:"MC23112",name:"Environmental Science and Engineering",credits:0},
    {id:"GE23421",semester:"IV",code:"GE23421",name:"Soft Skills I",credits:1},
    {id:"pe-v-i",semester:"V",code:"",name:"Professional Elective I",credits:3},
    {id:"pe-v-ii",semester:"V",code:"",name:"Professional Elective II",credits:3},
    {id:"GE23521",semester:"V",code:"GE23521",name:"Soft Skills II",credits:1},
    {id:"pe-vi-iii",semester:"VI",code:"",name:"Professional Elective III",credits:3},
    {id:"oe-vi-i",semester:"VI",code:"",name:"Open Elective I",credits:3},
    {id:"GE23627",semester:"VI",code:"GE23627",name:"Design Thinking and Innovation",credits:2},
    {id:"GE23621",semester:"VI",code:"GE23621",name:"Problem Solving Techniques",credits:1},
    {id:"AD23621",semester:"VI",code:"AD23621",name:"Internship",credits:3},
    {id:"pe-vii-iv",semester:"VII",code:"",name:"Professional Elective IV",credits:3},
    {id:"pe-vii-v",semester:"VII",code:"",name:"Professional Elective V",credits:3},
    {id:"oe-vii-ii",semester:"VII",code:"",name:"Open Elective II",credits:3},
    {id:"AD23722",semester:"VII",code:"AD23722",name:"Project Phase I",credits:4},
    {id:"pe-viii-vi",semester:"VIII",code:"",name:"Professional Elective VI",credits:3},
    {id:"AD23822",semester:"VIII",code:"AD23822",name:"Project Phase II",credits:4}
  ];
  const samples = {
    TO:{cat1:72,cat2:70,quizzes:46,eseTheory:94},
    LOT:{cat1:72,cat2:68,quizzes:45,labInternal:68,modelLab:22,eseTheory:90,eseLab:93}
  };
  const TARGETS = {"S":91,"A+":81,A:71,"B+":66,B:61,"C+":56,C:50};
  const GRADES = ["S","A+","A","B+","B","C+","C","U"];
  const REC_GRADE_POINTS = Object.freeze({S:"10","A+":"9",A:"8","B+":"7",B:"6.5","C+":"6",C:"5",U:"0"});
  const state = {type:"TO",marks:{TO:{},LOT:{}},absent:{TO:false,LOT:false},invalid:new Set()};
  const gpa = {
    points:{...REC_GRADE_POINTS},
    scaleMax:"10",
    courses:[{subjectId:"",name:"",grade:"",credits:""}],
    previousGpa:"",
    previousCredits:""
  };
  let activeTab="calculator";
  const numberFormat = value => Number(value).toFixed(2);
  const $ = selector => document.querySelector(selector);
  const currentMarks = () => state.marks[state.type];
  const isAbsent = () => state.absent[state.type];
  const esc = value => String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));

  function gradeFor(total) {
    if(total>=91)return "S";
    if(total>=81)return "A+";
    if(total>=71)return "A";
    if(total>=66)return "B+";
    if(total>=61)return "B";
    if(total>=56)return "C+";
    if(total>=50)return "C";
    return "U";
  }
  function calculate(marks,type) {
    const value=key=>Number(marks[key]||0);
    if(type==="LOT") {
      const theoryInternal=(value("cat1")+value("cat2")+value("quizzes"))/200*25;
      const labInternal=(value("labInternal")+value("modelLab"))/100*25;
      const endTheory=value("eseTheory")/100*25;
      const endLab=value("eseLab")/100*25;
      return {theoryInternal,labInternal,internal:theoryInternal+labInternal,endTheory,endLab,external:endTheory+endLab,total:theoryInternal+labInternal+endTheory+endLab};
    }
    const internal=(value("cat1")+value("cat2")+value("quizzes"))/200*40;
    const external=value("eseTheory")/100*60;
    return {internal,external,total:internal+external};
  }
  function renderFields() {
    const isLab=state.type==="LOT";
    $("#absent").checked=isAbsent();
    const groups=isLab?[
      {title:"Theory assessment",hint:"Internal · 25 marks",fields:["cat1","cat2","quizzes"]},
      {title:"Laboratory assessment",hint:"Internal · 25 marks",fields:["labInternal","modelLab"]},
      {title:"End-semester examination",hint:"External · 50 marks",fields:["eseTheory","eseLab"]}
    ]:[
      {title:"Theory assessment",hint:"Internal · 40 marks",fields:["cat1","cat2","quizzes"]},
      {title:"End-semester examination",hint:"External · 60 marks",fields:["eseTheory"]}
    ];
    $("#assessment-fields").innerHTML=groups.map(group=>`
      <section class="assessment-group">
        <div class="group-heading"><strong>${group.title}</strong><span>${group.hint}</span></div>
        <div class="mark-grid">${group.fields.map(key=>`
          <label class="mark-field" for="mark-${key}">
            <span class="mark-label">${LABELS[key][0]}<small>MAX ${MAX[key]}</small></span>
            <span class="mark-entry"><input id="mark-${key}" type="number" min="0" max="${MAX[key]}" step="0.01" inputmode="decimal" placeholder="—" value="${currentMarks()[key]??""}" data-mark="${key}" ${isAbsent()?"disabled":""} aria-describedby="error-${key}"><span>/${MAX[key]}</span></span>
            <small class="field-error" id="error-${key}" aria-live="polite"></small>
          </label>`).join("")}</div>
      </section>`).join("");
    $("#type-description").textContent=isLab
      ?"Theory internal /25 + laboratory internal /25 + end-semester theory /25 + lab /25"
      :"Theory assessment · internal /40 + end-semester theory /60";
  }
  function renderSubjectOptions(semester="all",selected="") {
    const picker=$("#subject-picker");
    const available=SUBJECTS.filter(subject=>semester==="all"||subject.semester===semester);
    const semesterOrder=["I","II","III","IV","V","VI","VII","VIII"];
    const groups=semesterOrder.map(term=>{
      const subjects=available.filter(subject=>subject.semester===term);
      if(!subjects.length)return "";
      return `<optgroup label="Semester ${term}">${subjects.map(subject=>`<option value="${subject.code}" data-type="${subject.type}">${subject.code} · ${esc(subject.name)}</option>`).join("")}</optgroup>`;
    }).join("");
    picker.innerHTML=`<option value="">Choose a subject</option>${groups}<option value="__manual__">Other — enter a subject name</option>`;
    picker.value=Array.from(picker.options).some(option=>option.value===selected)?selected:"";
  }
  function updateSelectedSubject() {
    const picker=$("#subject-picker"),manual=$("#subject-name"),isManual=picker.value==="__manual__";
    manual.hidden=!isManual;
    if(isManual){manual.focus();renderResult();return;}
    manual.value="";
    const subject=SUBJECTS.find(item=>item.code===picker.value);
    if(subject){state.type=subject.type;$("#subject-type").value=subject.type;renderFields();}
    renderResult();
  }
  function subjectLabel() {
    const picker=$("#subject-picker");
    if(picker.value==="__manual__")return $("#subject-name").value.trim();
    const selected=picker.selectedOptions[0];
    return selected?.dataset.type?selected.textContent:"";
  }
  function showResult(grade,total,internal,external,caption,message,progress=true) {
    const gradeNode=$("#grade-value");
    gradeNode.textContent=grade;
    gradeNode.className=`grade-value ${grade==="—"?"grade-empty":`grade-${grade.toLowerCase().replace("+","plus")}`}`;
    $("#grade-caption").textContent=caption;
    $("#total-value").textContent=total;
    $("#internal-value").textContent=internal;
    $("#external-value").textContent=external;
    $("#result-message").textContent=message;
    $("#total-bar").style.width=progress?`${Math.max(0,Math.min(100,Number(total)||0))}%`:"0%";
    const student=$("#student-name").value.trim(),subject=subjectLabel();
    $("#result-context").textContent=[student||"Your result",subject].filter(Boolean).join(" · ");
  }
  function renderResult() {
    const visibleFields=COMPONENTS[state.type];
    if(state.invalid.size) {
      showResult("—","—","—","—","Fix invalid marks","One or more marks are outside the allowed range. Correct the highlighted field(s).",false);
      renderTargetPlan();
      return;
    }
    if(isAbsent()) {
      showResult("U","0.00","0.00","0.00","Absent","An absent assessment is shown as U (Fail).");
      renderTargetPlan();
      return;
    }
    if(!visibleFields.some(key=>currentMarks()[key]!==undefined&&currentMarks()[key]!=="")) {
      showResult("—","—","—","—","Enter marks to calculate","Add your assessment marks to see your result.",false);
      renderTargetPlan();
      return;
    }
    const result=calculate(currentMarks(),state.type),grade=gradeFor(result.total),total=numberFormat(result.total);
    const internal=numberFormat(result.internal),external=numberFormat(result.external);
    const caption=grade==="U"?"Below the passing mark":"Your calculated grade";
    let message=grade==="U"?"A total below 50 receives a U grade.":`A final total of ${total} earns grade ${grade}.`;
    if(state.type==="LOT") {
      message=`Theory internal ${numberFormat(result.theoryInternal)} + laboratory internal ${numberFormat(result.labInternal)} + end-semester theory ${numberFormat(result.endTheory)} + lab ${numberFormat(result.endLab)}.`;
      $("#result-message").classList.add("result-detail");
    } else {
      $("#result-message").classList.remove("result-detail");
    }
    showResult(grade,total,internal,external,caption,message);
    $("#result-message").classList.toggle("result-detail",state.type==="LOT");
    renderTargetPlan();
  }
  function updateMark(input) {
    const key=input.dataset.mark,value=input.value===""?null:Number(input.value),error=$("#error-"+key);
    if(value!==null&&(!Number.isFinite(value)||value<0||value>MAX[key])) {
      state.invalid.add(key);
      input.setAttribute("aria-invalid","true");
      error.textContent=value<0?"Marks cannot be negative.":`Maximum for ${LABELS[key][0]} is ${MAX[key]}.`;
      renderResult();
      return;
    }
    state.invalid.delete(key);
    input.removeAttribute("aria-invalid");
    error.textContent="";
    if(value===null)delete currentMarks()[key];else currentMarks()[key]=value;
    renderResult();
  }
  function internalMarks() {
    const marks=currentMarks(),value=key=>Number(marks[key]||0);
    if(state.type==="LOT") {
      const theory=(value("cat1")+value("cat2")+value("quizzes"))/200*25;
      const lab=(value("labInternal")+value("modelLab"))/100*25;
      return {total:theory+lab,earned:COMPONENTS.LOT.slice(0,5).some(key=>marks[key]!==undefined&&marks[key]!==""),max:50};
    }
    return {total:(value("cat1")+value("cat2")+value("quizzes"))/200*40,earned:COMPONENTS.TO.slice(0,3).some(key=>marks[key]!==undefined&&marks[key]!==""),max:40};
  }
  function ceilToHundredth(value) {
    return Math.ceil(value*100-1e-8)/100;
  }
  function renderTargetPlan() {
    const targetContainer=$("#target-result");
    if(!targetContainer)return;
    const targetGrade=$("#target-grade").value,threshold=TARGETS[targetGrade],internal=internalMarks();
    const label=state.type==="LOT"?"LOT internal marks":"TO internal marks";
    if(state.invalid.size) {
      targetContainer.innerHTML='<div class="target-empty"><strong>Correct the highlighted mark first</strong><span>Target estimates update once all assessment marks are in range.</span></div>';
      return;
    }
    if(isAbsent()) {
      targetContainer.innerHTML=`<div class="target-empty target-impossible"><strong>${esc(targetGrade)} is not reachable for an absent assessment</strong><span>This assessment is currently marked absent. Update the marks or absence status in the calculator to review a target.</span></div>`;
      return;
    }
    if(!internal.earned) {
      targetContainer.innerHTML=`<div class="target-empty"><strong>Enter your ${esc(label.toLowerCase())}</strong><span>Switch to the calculator and enter at least one internal assessment mark. End-semester marks are not used in this estimate.</span></div>`;
      return;
    }
    const needed=threshold-internal.total,share=state.type==="TO"?needed/.6:needed/.5;
    const maximum=state.type==="TO"?100:100;
    const attainable=needed<=0||share<=maximum;
    const score=needed<=0?0:ceilToHundredth(share);
    let requirement;
    if(!attainable)requirement=state.type==="TO"?"The target needs more than 100 / 100 in ESE Theory.":"The target needs more than 100 / 100 in both end-semester exams, even with equal scores.";
    else if(needed<=0)requirement=`Your internal marks already meet the ${targetGrade} threshold of ${threshold}. Any ESE marks will add to your final total.`;
    else if(state.type==="TO")requirement=`Aim for at least ${numberFormat(score)} / 100 in End Semester Theory.`;
    else requirement=`Aim for at least ${numberFormat(score)} / 100 in ESE Theory and ${numberFormat(score)} / 100 in ESE Lab (equal-score estimate).`;
    const totalClass=attainable?"target-attainable":"target-impossible";
    targetContainer.innerHTML=`<div class="target-metrics"><div><span>${esc(label)}</span><strong>${numberFormat(internal.total)} <small>/ ${internal.max}</small></strong></div><div><span>Target total</span><strong>${threshold.toFixed(2)} <small>/ 100 · ${esc(targetGrade)}</small></strong></div></div><div class="target-answer ${totalClass}"><span class="answer-icon">${attainable?"↗":"!"}</span><div><strong>${attainable?"Your ESE target":"Target not reachable"}</strong><p>${esc(requirement)}</p></div></div><div class="target-progress"><span>Internal contribution</span><div><i style="width:${Math.min(100,internal.total/internal.max*100)}%"></i></div><strong>${Math.round(internal.total/internal.max*100)}%</strong></div>`;
  }
  function gpaSubjectOptions(course,index) {
    const semesterOrder=["I","II","III","IV","V","VI","VII","VIII"];
    const groups=semesterOrder.map(semester=>{
      const subjects=GPA_SUBJECTS.filter(subject=>subject.semester===semester);
      if(!subjects.length)return "";
      return `<optgroup label="Semester ${semester}">${subjects.map(subject=>{
        const code=subject.code?`${subject.code} · `:"";
        const creditLabel=subject.credits===1?"credit":"credits";
        const label=`${code}${subject.name} · ${subject.credits} ${creditLabel}`;
        return `<option value="${esc(subject.id)}" ${course.subjectId===subject.id?"selected":""}>${esc(label)}</option>`;
      }).join("")}</optgroup>`;
    }).join("");
    return `<label class="sr-only" for="course-subject-${index}">Subject for course ${index+1}</label><select id="course-subject-${index}" data-course="subject" data-index="${index}" aria-label="Choose a curriculum subject for course ${index+1}"><option value="" ${course.subjectId?"":"selected"}>Choose subject</option>${groups}<option value="__custom__" ${course.subjectId==="__custom__"?"selected":""}>Other — enter manually</option></select>`;
  }
  function gpaRow(course,index) {
    const selectedSubject=GPA_SUBJECTS.find(subject=>subject.id===course.subjectId);
    const nonCredit=course.credits!==""&&Number(course.credits)===0;
    const customName=course.subjectId==="__custom__"?`<label class="sr-only" for="course-name-${index}">Custom course name</label><input id="course-name-${index}" class="course-name" type="text" maxlength="70" placeholder="Enter course name" value="${esc(course.name)}" data-course="name" data-index="${index}">`:"";
    return `<div class="course-row" data-course-row="${index}"><div class="course-subject-fields">${gpaSubjectOptions(course,index)}${customName}</div><label class="sr-only" for="course-grade-${index}">Course grade</label><select id="course-grade-${index}" data-course="grade" data-index="${index}" ${nonCredit?"disabled":""}><option value="">Grade</option>${GRADES.map(grade=>`<option value="${grade}" ${course.grade===grade?"selected":""}>${grade}</option>`).join("")}</select><label class="sr-only" for="course-credits-${index}">Credits</label><span class="credit-input"><input id="course-credits-${index}" type="number" min="0" max="10" step="0.5" inputmode="decimal" placeholder="0" value="${esc(course.credits)}" data-course="credits" data-index="${index}" ${selectedSubject?"readonly":""} aria-label="Credits for course ${index+1}"><small>credits</small></span><button type="button" class="remove-course" data-remove-course="${index}" aria-label="Remove course ${index+1}" ${gpa.courses.length===1?"disabled":""}>×</button></div>`;
  }
  function renderGpa() {
    $("#gpa-workspace").innerHTML=`
      <section class="gpa-card point-card">
        <div class="feature-card-heading"><div><span class="section-kicker">REC GRADE SCALE</span><h3>Grade-point mapping</h3></div><label class="scale-maximum">Maximum point value<input type="number" min="0.01" step="0.01" inputmode="decimal" placeholder="10" value="${esc(gpa.scaleMax)}" data-scale-max></label></div>
        <p class="gpa-helper">REC points are prefilled: S 10, A+ 9, A 8, B+ 7, B 6.5, C+ 6, C 5, U 0. Edit these values only if your institution uses a different scale.</p>
        <div class="point-grid">${GRADES.map(grade=>`<label class="point-field"><span>${grade}</span><input type="number" min="0" step="0.01" inputmode="decimal" placeholder="—" value="${esc(gpa.points[grade])}" data-point="${grade}" aria-label="${grade} grade-point value"></label>`).join("")}</div>
      </section>
      <div class="gpa-grid">
        <section class="gpa-card semester-card">
          <div class="feature-card-heading"><div><span class="section-kicker">THIS SEMESTER</span><h3>Course grades &amp; credits</h3></div><span class="credit-cap">Curriculum credits auto-fill</span></div>
          <p class="gpa-helper">Choose a subject from Semesters I–VIII. Credits fill from the curriculum; choose Other for a custom course. Non-credit courses are excluded from GPA and CGPA.</p>
          <div class="course-headings"><span>SUBJECT</span><span>GRADE</span><span>CREDITS</span><span></span></div>
          <div id="course-rows">${gpa.courses.map(gpaRow).join("")}</div>
          <button type="button" class="add-course" id="add-course">＋ Add another course</button>
          <div class="previous-study"><div><span class="section-kicker">OPTIONAL</span><h3>Previous semesters</h3><p>Enter your cumulative GPA and completed credits to estimate your updated CGPA.</p></div><div class="previous-inputs"><label>Previous CGPA<input type="number" min="0" step="0.01" inputmode="decimal" placeholder="Previous CGPA" value="${esc(gpa.previousGpa)}" data-previous="gpa"></label><label>Completed credits<input type="number" min="0" step="0.5" inputmode="decimal" placeholder="Completed credits" value="${esc(gpa.previousCredits)}" data-previous="credits"></label></div></div>
        </section>
        <aside class="gpa-results" aria-live="polite">
          <section class="gpa-score-card"><span class="section-kicker">SEMESTER RESULT</span><div class="gpa-score"><strong id="semester-gpa">—</strong><span>/ <span id="semester-scale">—</span></span></div><p>Weighted grade-point average</p><div class="gpa-divider"></div><span class="section-kicker">CUMULATIVE RESULT</span><div class="gpa-score"><strong id="cumulative-gpa">—</strong><span>/ <span id="cumulative-scale">—</span></span></div><p>Weighted across completed credits</p><div class="gpa-stat-row"><span>Credits this semester</span><strong id="calculated-credits">—</strong></div><div class="gpa-stat-row"><span>Total CGPA credits</span><strong id="total-credits">—</strong></div></section>
          <p id="gpa-status" class="gpa-status">Choose course subjects and grades to calculate GPA and CGPA with the REC grade-point mapping.</p>
        </aside>
      </div>
      <div class="gpa-footer"><span>GPA = Σ (course credits × course grade points) ÷ Σ course credits.</span><button type="button" class="button button-quiet" id="clear-gpa">Clear GPA entries</button></div>`;
    updateGpaResults();
  }
  function updateGpaResults() {
    const semesterNode=$("#semester-gpa"),cgpaNode=$("#cumulative-gpa"),creditsNode=$("#calculated-credits"),totalCreditsNode=$("#total-credits"),status=$("#gpa-status");
    if(!semesterNode)return;
    const maximum=gpa.scaleMax===""?NaN:Number(gpa.scaleMax);
    $("#semester-scale").textContent=Number.isFinite(maximum)&&maximum>0?Number(maximum.toFixed(2)).toString():"—";
    $("#cumulative-scale").textContent=Number.isFinite(maximum)&&maximum>0?Number(maximum.toFixed(2)).toString():"—";
    const selected=gpa.courses.map((course,index)=>({course,index})).filter(({course})=>(course.subjectId&&course.subjectId!=="__custom__")||course.grade||course.credits!==""||course.name.trim());
    const previousGpa=gpa.previousGpa===""?null:Number(gpa.previousGpa);
    const previousCredits=gpa.previousCredits===""?null:Number(gpa.previousCredits);
    if(!selected.length&&previousGpa===null&&previousCredits===null) {
      semesterNode.textContent="—";cgpaNode.textContent="—";creditsNode.textContent="—";totalCreditsNode.textContent="—";
      status.textContent="Choose course subjects and grades to calculate GPA and CGPA with the REC grade-point mapping.";status.className="gpa-status";return;
    }
    let invalid="";
    if((previousGpa===null)!==(previousCredits===null))invalid="Enter both previous CGPA and completed credits, or leave both blank.";
    if(selected.some(({course})=>course.grade&&Number(course.credits)!==0)&&(!Number.isFinite(maximum)||maximum<=0))invalid="Enter your institution’s maximum grade-point value before calculating.";
    if(previousGpa!==null&&(!Number.isFinite(previousGpa)||previousGpa<0||(Number.isFinite(maximum)&&maximum>0&&previousGpa>maximum)))invalid=`Previous CGPA must be between 0 and ${Number.isFinite(maximum)&&maximum>0?maximum:"your scale maximum"}.`;
    if(previousCredits!==null&&(!Number.isFinite(previousCredits)||previousCredits<=0))invalid="Completed credits must be greater than zero.";
    let qualityPoints=0,credits=0,missingScale=[];
    for(const {course,index} of selected) {
      const courseCredits=course.credits===""?NaN:Number(course.credits);
      if(courseCredits===0)continue;
      if(!Number.isFinite(courseCredits)||courseCredits<=0||courseCredits>10){invalid=invalid||`Enter credits greater than 0 and no more than 10 for course ${index+1}.`;continue;}
      if(!course.grade){invalid=invalid||`Choose a grade for course ${index+1}.`;continue;}
      const pointText=gpa.points[course.grade],point=pointText===""?NaN:Number(pointText);
      if(!Number.isFinite(point)||point<0||!Number.isFinite(maximum)||maximum<=0||point>maximum){missingScale.push(course.grade);continue;}
      qualityPoints+=courseCredits*point;credits+=courseCredits;
    }
    creditsNode.textContent=credits?Number(credits.toFixed(2)).toString():"—";
    if(invalid){semesterNode.textContent="—";cgpaNode.textContent="—";totalCreditsNode.textContent="—";status.textContent=invalid;status.className="gpa-status gpa-error";return;}
    if(missingScale.length){semesterNode.textContent="—";cgpaNode.textContent="—";totalCreditsNode.textContent="—";status.textContent=`Enter valid grade points from 0 to ${Number.isFinite(maximum)&&maximum>0?maximum:"your scale maximum"} for ${[...new Set(missingScale)].join(", ")} in the mapping above.`;status.className="gpa-status gpa-error";return;}
    if(!credits) {
      semesterNode.textContent="—";
      if(previousGpa!==null) {
        cgpaNode.textContent=previousGpa.toFixed(2);
        totalCreditsNode.textContent=Number(previousCredits.toFixed(2)).toString();
        status.textContent=selected.some(({course})=>Number(course.credits)===0)
          ?"Non-credit subjects are excluded. Showing your previous CGPA only; add credit-bearing courses to update it."
          :"Showing your previous CGPA only. Add this semester’s course grades and credits to update it.";
      } else {
        cgpaNode.textContent="—";totalCreditsNode.textContent="—";
        status.textContent=selected.some(({course})=>Number(course.credits)===0)
          ?"Non-credit subjects are excluded. Add at least one credit-bearing course to calculate GPA."
          :"Add at least one graded course with credits to calculate GPA.";
      }
      status.className="gpa-status";return;
    }
    const semester=qualityPoints/credits;
    const cumulative=previousGpa===null?semester:(previousGpa*previousCredits+qualityPoints)/(previousCredits+credits);
    semesterNode.textContent=semester.toFixed(2);cgpaNode.textContent=cumulative.toFixed(2);
    totalCreditsNode.textContent=Number((credits+(previousCredits||0)).toFixed(2)).toString();
    status.textContent=previousGpa===null?"CGPA matches this semester GPA until previous-semester details are added.":"CGPA combines the previous CGPA with this semester’s course credits.";
    status.className="gpa-status";
  }
  function setActiveTab(tab) {
    if(!["calculator","target","gpa"].includes(tab))return;
    activeTab=tab;document.body.dataset.tab=tab;
    document.querySelectorAll(".tool-tab[data-tab]").forEach(button=>button.classList.toggle("active",button.dataset.tab===tab));
    document.querySelectorAll(".tool-panel").forEach(panel=>{const active=panel.id===`${tab}-panel`;panel.hidden=!active;panel.classList.toggle("active",active);});
    if(tab==="target")renderTargetPlan();
    if(tab==="gpa")updateGpaResults();
  }
  function clearCalculator() {
    state.marks={TO:{},LOT:{}};state.absent={TO:false,LOT:false};state.invalid.clear();
    $("#student-name").value="";$("#subject-name").value="";
    $("#subject-picker").value="";$("#subject-name").hidden=true;$("#absent").checked=false;
    renderFields();renderResult();
  }

  $("#semester-filter").addEventListener("change",event=>{
    const selected=$("#subject-picker").value;
    const subject=SUBJECTS.find(item=>item.code===selected);
    const preserve=selected==="__manual__"||!subject||event.target.value==="all"||subject.semester===event.target.value;
    renderSubjectOptions(event.target.value,preserve?selected:"");
    if(!preserve){$("#subject-name").value="";$("#subject-name").hidden=true;renderResult();}
  });
  $("#subject-picker").addEventListener("change",updateSelectedSubject);
  $("#subject-type").addEventListener("change",event=>{
    state.type=event.target.value;
    state.invalid.clear();
    renderFields();renderResult();
  });
  document.querySelectorAll("[data-tab]").forEach(button=>button.addEventListener("click",()=>setActiveTab(button.dataset.tab)));
  $("#assessment-fields").addEventListener("input",event=>{
    const input=event.target.closest("[data-mark]");
    if(input)updateMark(input);
  });
  $("#absent").addEventListener("change",event=>{
    state.absent[state.type]=event.target.checked;
    if(isAbsent()){state.marks[state.type]={};state.invalid.clear();}
    renderFields();renderResult();
  });
  $("#student-name").addEventListener("input",renderResult);
  $("#subject-name").addEventListener("input",renderResult);
  $("#reset-button").addEventListener("click",clearCalculator);
  $("#sample-button").addEventListener("click",()=>{
    state.marks[state.type]={...samples[state.type]};state.absent[state.type]=false;state.invalid.clear();
    $("#absent").checked=false;
    renderFields();renderResult();
  });
  $("#target-grade").addEventListener("change",renderTargetPlan);
  $("#gpa-workspace").addEventListener("input",event=>{
    if(event.target.matches("[data-scale-max]")){gpa.scaleMax=event.target.value;updateGpaResults();return;}
    const point=event.target.dataset.point;
    if(point!==undefined){gpa.points[point]=event.target.value;updateGpaResults();return;}
    const courseField=event.target.dataset.course;
    if(courseField==="subject")return;
    if(courseField){gpa.courses[Number(event.target.dataset.index)][courseField]=event.target.value;updateGpaResults();return;}
    const previous=event.target.dataset.previous;
    if(previous){if(previous==="gpa")gpa.previousGpa=event.target.value;else gpa.previousCredits=event.target.value;updateGpaResults();}
  });
  $("#gpa-workspace").addEventListener("change",event=>{
    const courseField=event.target.dataset.course;
    if(courseField==="subject") {
      const index=Number(event.target.dataset.index),subjectId=event.target.value;
      if(subjectId==="__custom__")gpa.courses[index]={subjectId,name:"",grade:"",credits:""};
      else if(subjectId) {
        const subject=GPA_SUBJECTS.find(item=>item.id===subjectId);
        if(!subject)return;
        gpa.courses[index]={subjectId:subject.id,name:subject.name,grade:"",credits:String(subject.credits)};
      } else gpa.courses[index]={subjectId:"",name:"",grade:"",credits:""};
      renderGpa();
      const nextInput=subjectId==="__custom__"?`#course-name-${index}`:`#course-grade-${index}`;
      $(nextInput).focus();
      return;
    }
    if(courseField){gpa.courses[Number(event.target.dataset.index)][courseField]=event.target.value;updateGpaResults();}
  });
  $("#gpa-workspace").addEventListener("click",event=>{
    if(event.target.id==="add-course"){gpa.courses.push({subjectId:"",name:"",grade:"",credits:""});renderGpa();$("#course-subject-"+(gpa.courses.length-1)).focus();}
    const remove=event.target.closest("[data-remove-course]");
    if(remove){gpa.courses.splice(Number(remove.dataset.removeCourse),1);if(!gpa.courses.length)gpa.courses.push({subjectId:"",name:"",grade:"",credits:""});renderGpa();}
    if(event.target.id==="clear-gpa"){
      gpa.points={...REC_GRADE_POINTS};
      gpa.scaleMax="10";
      gpa.courses=[{subjectId:"",name:"",grade:"",credits:""}];gpa.previousGpa="";gpa.previousCredits="";renderGpa();
    }
  });
  $("#copy-result").addEventListener("click",async event=>{
    const button=event.currentTarget;
    if($("#grade-value").textContent==="—"){button.textContent="Enter marks first";setTimeout(()=>{button.textContent="Copy result";},1700);return;}
    const breakdown=state.type==="TO"
      ?`Internal: ${$("#internal-value").textContent}/40\nEnd semester: ${$("#external-value").textContent}/60`
      :`${$("#result-message").textContent}\nInternal: ${$("#internal-value").textContent}/50\nEnd semester: ${$("#external-value").textContent}/50`;
    const summary=`${$("#result-context").textContent}\n${state.type==="TO"?"Theory Only":"Lab Oriented Theory"}\n${breakdown}\nFinal total: ${$("#total-value").textContent}/100\nGrade: ${$("#grade-value").textContent}`;
    try {
      if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(summary);
      else {
        const temporary=document.createElement("textarea");temporary.value=summary;temporary.style.position="fixed";temporary.style.opacity="0";document.body.append(temporary);temporary.select();
        if(!document.execCommand("copy"))throw new Error("Clipboard access is unavailable.");
        temporary.remove();
      }
      button.textContent="Copied!";
    } catch(error) {
      console.error("Could not copy the result.",error);
      button.textContent="Copy unavailable";
    }
    setTimeout(()=>{button.textContent="Copy result";},1700);
  });
  $("#print-result").addEventListener("click",()=>window.print());

  renderSubjectOptions();
  renderFields();
  renderGpa();
  renderResult();
  setActiveTab("calculator");
})();
