import { endOfMonth, format, getDaysInMonth, sub } from "date-fns";

export const getOneYearDays = (today:string,lastDay:string):string[] => {
    const days:string[] = [];
    while(today !== lastDay){
        days.unshift(today);
        today = sub(today,{days:1}).toISOString();
    }
    return days;
};

// todo これ制度結構悪いから頑張る。。
export const getMonths = ():{month:string,colSpan:number}[] => {
    const months:{month:string,colSpan:number}[] = [];
    let startDay:Date = sub(new Date(),{years:1});
    const lastDay:Date = new Date();
    let now:number = 0;
    while(startDay <= lastDay){
        // 最初の場合
        if(
            startDay.getFullYear() === sub(new Date(),{years:1}).getFullYear() &&
            startDay.getMonth() === sub(new Date(),{years:1}).getMonth()
        ){
            now += endOfMonth(startDay).getDate() - startDay.getDate() + 1
            months.push({
                month:format(startDay,'MMM'),
                colSpan:Math.ceil(now/7),
            });
        }else if(
            // 最後の場合
            startDay.getFullYear() === new Date().getFullYear() && 
            startDay.getMonth() === new Date().getMonth()
        ){
            now += new Date().getMonth();
            months.push({
                month:format(startDay,'MMM'),
                colSpan:Math.ceil(new Date().getMonth()/7)
            });
        }else{
            // それ以外
            months.push({
                month:format(startDay,'MMM'),
                colSpan:Math.ceil((now+getDaysInMonth(startDay))/7)-Math.ceil(now/7)
            });
            now += getDaysInMonth(startDay)
        };
        startDay.setMonth(startDay.getMonth()+1);
    }

    return months;
}