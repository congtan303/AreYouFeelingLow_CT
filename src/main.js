

function generateCompliment() {
    const compliments = [
        "Nụ cười của bạn rất đẹp.",
        "Bạn trông thật là tuyệt vào hôm nay.",
        "Tôi cá là bạn có thể làm cho trẻ nhỏ mỉm cười.",
        "Bạn có cách cư xử hoàn hảo.",
        "Tôi thích phong cách của bạn",
        "Bạn có những tiếng cười sảng khoái nhất.",
        "Tôi đánh giá cao bạn.",
        "Bạn là người hoàn hảo nhất mà bạn đã từng gặp.",
        "Bạn thật mạnh mẽ.",
        "Quan điểm của bạn đang làm mới cuộc sống.",
        "Bạn có những người bạn thật tuyệt vời.",
        "Bạn thắp sáng cả căn phòng.",
        "Ngay lúc này bạn xứng đáng có một cái ôm.",
        "Bạn nên tự hào về bản thân mình",
        "Bạn hữu ích hơn những gì bạn nhận ra.",
        "Bạn có một khiếu hài hước tuyệt vời.",
        "Bạn đã có tất cả các nước đi đúng đắn!",
        "Lòng tốt của bạn là sự xoa dịu cho tất cả những ai gặp phải nó.",
        "Bạn thật dũng cảm.",
        "Bạn như ánh nắng đẹp đẽ vào những ngày mưa tầm tã.",
        "Bạn mang lại sự khác biệt.",
        "Bạn là người lắng nghe tốt",
        "Làm thế nào để bạn luôn trông tuyệt vời, ngay cả khi mặc đồ thể thao?",
        "Mọi thứ sẽ tốt hơn nếu có nhiều người giống bạn!",
        "Bạn luôn hiểu - và nói - chính xác những gì tôi cần nghe khi tôi cần nghe nó.",
        "Điều bạn không thích ở bản thân lại là điều khiến bạn trở nên thú vị.",
        "Khi bạn không sợ là chính mình là lúc bạn đáng kinh ngạc nhất.",
        "Nếu bạn là một hộp bút chì màu, bạn sẽ là một thương hiệu khổng lồ với công cụ mài được tích hợp sẵn.",
        "Bạn luôn học hỏi những điều mới và cố gắng hoàn thiện bản thân hơn, điều đó thật tuyệt vời.",
    ]
    const randomCompliments = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment").innerHTML = compliments[randomCompliments];
    
}


//  update footer copyright year

var today = new Date();
var year = today.getFullYear();

var copyright = document.getElementById("copyright");
copyright.innerHTML = '© Nguyễn Công Tân '+ year;