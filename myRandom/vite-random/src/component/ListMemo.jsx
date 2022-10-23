import React, {useState, useMemo} from "react";
import { Form } from "react-bootstrap";

export default function ListMemo(){

    return (
        <Form>
            <div id="list_wrap">
                <p>123</p>
                <p>234</p>
                <p>345</p>
            </div>
            <Form.Group className="mb-3" controlId="formMusic">
                <Form.Label>무슨 노래를 먼저 들을까요? どんな歌を歌いますかなー</Form.Label>
                <Form.Control id=""></Form.Control>
                <Form.Text>내용을 입력해주세요.</Form.Text>
            </Form.Group>
        </Form>
    )
}