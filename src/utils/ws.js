import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'

let stompClient = null
const handlers = []

export function connect() {
    const socket = new SockJS('http://192.168.88.2:8080/gs-guide-websocket')
    stompClient = Stomp.over(socket)
    stompClient.debug = () => {}
    stompClient.connect({}, frame => {
        console.log(frame)
        stompClient.subscribe('http://192.168.88.2:8080/topic/activity', message => {
            handlers.forEach(handler => handler(JSON.parse(message.body)))
            console.log('ws:' + message.body)
        })
    })
}

export function addHandler(handler) {
    handlers.push(handler)
}

export function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect()
    }
    console.log("Disconnected")
}

export function sendMessage(message) {
    stompClient.send("/app/message", {}, JSON.stringify(message))
}