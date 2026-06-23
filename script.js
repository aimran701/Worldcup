// قيم افتراضية لعدد الأصوات والتوقعات لكل مباراة
let votes = {
    m1: { win1: 65, draw: 15, win2: 20 },
    m2: { win1: 70, draw: 12, win2: 18 }
};

function castVote(matchId, choice) {
    // زيادة التوقع الذي اختاره المستخدم بمقدار 1%
    votes[matchId][choice] += 1;
    
    // تحديث الأرقام مباشرة على الشاشة أمام الزائر
    if (choice === 'draw') {
        document.getElementById(`${matchId}-draw`).innerText = votes[matchId].draw + '%';
    } else {
        document.getElementById(`${matchId}-${choice}`).innerText = votes[matchId][choice] + '%';
    }
    
    // إظهار رسالة شكر فخمة للزائر وتجميد الأزرار لتجنب التكرار
    const card = document.getElementById(matchId == 'm1' ? 'match1' : 'match2');
    const buttons = card.querySelectorAll('.btn-predict');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
    });
    
    alert("تم تسجيل توقعك الملكي بنجاح! 🏆");
}