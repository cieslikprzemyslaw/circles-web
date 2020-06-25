import * as firebase from "firebase/app";
import { useState, useEffect, useCallback } from "react";
import { IMessage } from "types";
import { useAudio } from "utils/hooks/sound";

const makeRefPath = (room_id: string) => {
    return `rooms/${room_id}/messages`;
}

export const useMessages = (room_id: string) => {
    const [, toggle] = useAudio("https://cdn-02.anonfiles.com/B4z8W9Bbo8/14878adc-1592945278/notification_sound.mp3");
    const [messages, setMessages] = useState<any>(null);

    useEffect(() => {
        const messagesRef = firebase.database().ref(makeRefPath(room_id));

        messagesRef.on('value', (snapshot) => {
            const msgs = snapshot.val() ?? [];

            setMessages((m: any) => {
                if(m !== null && typeof toggle === "function") toggle();
                return msgs;
            });
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [room_id]);

    return messages as {[key: string]: IMessage};
}

type SubmitFunction = ((value: string) => void);

export const useMessageSubmit = (room_id: string, account_id: string) => {

    return useCallback((value: string) => {
        const message = {
            author: account_id,
            value,
            timestamp: new Date().toString()
        }

        //firebase.database().ref(makeRefPath(room_id)).set(message);
        var newMsgKey = firebase.database().ref().child('rooms').child(room_id).child("messages").push().key;

        var updates: any = {};
        updates[`/rooms/${room_id}/messages/${newMsgKey}`] = message;
      
        return firebase.database().ref().update(updates);

    }, [account_id, room_id]) as SubmitFunction;
}