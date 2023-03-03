let people = [
    { name: "Alaina Thomas", IDnumber: 214266514, plot: "plot1.jpeg", feedback: "Good work Alaina! There were quite a few errors on MCQ and 1 on fill in the blanks. Other than that, you lost marks for the proof, estimating var(5x - 2), explaining multi-collinearity and incorrectly reported the standardized slope. " },
    { name: "Alexandra Markwell", IDnumber: 216833188, plot: "plot2.jpeg", feedback: "Good work Alexandra! You lost 5 marks on MCQ, you got the proof incorrect, Var(5x - 2) was incorrect, R squared reported was incorrect, you reported the oncrrect regression slope for standardized variables and a minor interpretation error." },
    { name: "Ana Radmilovic", IDnumber: 219452333, plot: "plot3.jpeg", feedback: "Good work Ana! Your handwriting looks better than most google fonts. You made errors in 1 MCQ, 1 T/F, 2 fill in the blanks. Other than that, you got the proof wrong and the Var(5X - 2), incorrect interpretation of R squared and why the p-value for F-test and t-test is different. One more errors in not reporting the standardized slope value. Additionally, I may have incorrectly marked your final page, so you may see an increase in your mark." },
    { name: "Danika Wagner", IDnumber: 216801359, plot: "plot4.jpeg", feedback: "You did a great job on most questions Danika! You got a lot of MCQ wrong and a couple of fill in the blanks incorrect. Other than that, there were a couple of minor mistakes - your proof was wrong and you got the slope for standardized variables incorrect." },
    { name: "Gary Bold", IDnumber: 207405582, plot: "plot5.jpeg", feedback: "Great work Gary! You lost some marks on MCQ, T/F and fill in the blanks. Other than that, there were minor mistakes such as the proof, incorrect p-value interpretation and you did not report the value of the slope while reporting the slope for standardized variables and incorrectly interpreted it." },
    { name: "Jazzmin Demy", IDnumber: 216881997, plot: "plot6.jpeg", feedback: "Jazzmin, you made errors on MCQ, got 1 T/F wrong, 2 fill in the blanks wrong and incorrectly interpreted the following - estimating the probability, calculating var(5x - 2), the proof, R squared, the standardized slope, p-value and multi-collinearity." },
    { name: "Katarina Kovacevic", IDnumber: 209914722, plot: "plot7.jpeg", feedback: "Good work Kat! You made a lot of minor errors. You lost marks on 4 marks on MCQ, 0.5 on T/F, 2 for fill in the blanks. Other than that, you got the proof wrong, incorrectly interpreted the difference between F and t-value. You incorrectly reported the intercept and slope for standardized values and interpretations. Incorrectly interpreted p-values and multi-collinearity. You may see a boost in your marks as I graded a couple of questions too harshly. " },
    { name: "Lauren Webber", IDnumber: 216238750, plot: "plot8.jpeg", feedback: "Good work Lauren! You got a couple of MCQ incorrect, 2 T/F questions incorrect and 4 fill in the blanks incorrect. Other than that, you did fairly well. You did not report the proof or the value of the slope for standardized variables. Finally, you made a mistake interpreting p-values and final question." },
    { name: "Lojain Hamwi", IDnumber: 219335975, plot: "plot9.jpeg", feedback: "Excellent work Lojain! You performed extremely well on the midterm and made minor mistakes on MCQ, T/F and you incorrectly reported the value of the slope while reporting the standardized variables." },
    { name: "Marina Charalampopoulou", IDnumber: 218524934, plot: "plot10.jpeg", feedback: "Excellent work Marina! You performed extremely well on the midterm. You made minor mistakes on the MCQ, T/F. Additionally, you lost marks for the proof and some minor errors explaining multi-collinearity." },
    { name: "Sarah Bjornson", IDnumber: 218532705, plot: "plot11.jpeg", feedback: "Overall, good work! You made a few mistakes in the MCQ, T/F and fill in the blanks. You forgot to mention that the goal is to minimize the SSQ residuals. You got the proof wrong and you misinterpreted R squared and p values. "},
    { name: "Spencer Arshinoff", IDnumber: 219509140, plot: "plot12.jpeg", feedback: "Great work Spencer! You made a few mistakes in the MCQ. Incorrect descriptions of empirical and structural relations, inadequate responses for differences in random variables and constants. Incorrect interpretation for R squared and partially incorrect hypothesis reported. You did not report the value of the slope while reporting the correlation for standardized variables and failed to properly explain multicollinearity for the final question. " },
    { name: "Talia Tissera", IDnumber: 219377225, plot: "plot13.jpeg", feedback: "Great work Talia! You made a few mistakes in the MCQ, T/F and fill in the blanks. You incorrectly calculated Var(5x - 2), you did not report the value of the slope while reporting the correlation for standardized variables. You slightly misinterpreted the p-value and did not mention multicollinearity for the final question.  " },
    { name: "Tian Kuan", IDnumber: 215131030, plot: "plot14.jpeg", feedback: "Great work Tian! You did very well on the midterm. Most of your marks were lost in MCQ and fill in the blanks. Other than that, you lost marks for the proof and not reporting the value for the standardized slope. Overall, great work!" },
  ];
  
  function displayPlot() {
    var ID = document.getElementById("ID").value;
    var plotContainer = document.getElementById("plot-container");
    let personFeedback = document.querySelector(".feedback > p");
    let feedbackSection = document.querySelector(".feedback");
    var person = people.find(function(p) { return p.IDnumber == ID; });
    if (person) {
        // remove previously added elements
        while (plotContainer.firstChild) {
            plotContainer.removeChild(plotContainer.firstChild);
        }
        if (!feedbackSection.querySelector("h1")) {
            let headerFeedback = document.createElement("h1");
            headerFeedback.textContent = "Feedback";
            feedbackSection.insertBefore(headerFeedback, feedbackSection.firstChild);
        }
        let plotInfo = document.createElement("p");
        plotInfo.classList.add("instructions");
        plotInfo.textContent = "This plot demonstrates your midterm breakdown by page. The colors represent your performance relative to the class average on the particular set of questions. Green colours represent higher than average performance, red colours represent lower than average performance and gray colours represent average performance. If your grade was altered, it will not be reflected in the plot. ";
        plotContainer.appendChild(plotInfo);
        let plot = document.createElement("img");
        plot.src = person.plot;
        plotContainer.appendChild(plot);
        
        personFeedback.textContent = person.feedback;

    } else {
      plotContainer.innerHTML = "No plot found for this ID";
    }
}
