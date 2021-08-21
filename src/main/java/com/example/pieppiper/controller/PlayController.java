package com.example.pieppiper.controller;

import com.example.pieppiper.model.PlayMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class PlayController {

    @MessageMapping("/play")
    @SendTo("/music/play")
    public PlayMessage play(PlayMessage message){
        System.out.println("Received Message: "+message);
        return message;
    }
}
