import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'

let stompClient = null
const handlers = []

// функция коннекта websocket
export function connect() {
    const socket = new SockJS('http://192.168.88.2:8080/gs-guide-websocket')
    stompClient = Stomp.over(socket)
    stompClient.debug = () => {}
    stompClient.connect({}, frame => {
        stompClient.subscribe('/topic/messages', message => {
            handlers.forEach(handler => handler(JSON.parse(message.body)))
        })
    })
}

// функция заполнения массива сообщениями
// addMessageMutations в компоненте App.vue
export function addHandler(handler) {
    handlers.push(handler)
}

export function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect()
    }
    console.log("Disconnected")
}

// функция отправки сообщений через websocket
export function sendMessage(message) {
    stompClient.send("/app/sendMessage", {}, JSON.stringify(message))
}