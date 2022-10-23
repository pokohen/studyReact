import React from "react";
import { Button } from "react-bootstrap";

export default function SubmitButton(){
    
    const click_reset = ()=>{
        const $list_wrap = document.querySelector('#list_wrap')?? '';
        if($list_wrap !== ''){
            $list_wrap.querySelectorAll('p').forEach((e)=>{
                e.remove();
            });
            alert('초기화 되었습니다!\nリセットしました。');
        } else {
            alert('error');
        }
    };

    const click_save = ()=>{
        
    };

    const click_submit = ()=>{
        
    };

    return (
        <div>
            <Button onClick={click_reset}>초기화</Button>
            <Button onClick={click_save}>저장</Button>            
            <Button onClick={click_submit}>추첨</Button>
        </div>
    )
}