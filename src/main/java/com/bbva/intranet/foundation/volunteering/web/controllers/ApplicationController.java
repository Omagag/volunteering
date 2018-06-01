package com.bbva.intranet.foundation.volunteering.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ApplicationController {

    @RequestMapping("/")
    public String mentorNew() {
        return "mentor/new";
    }

    @RequestMapping("/scholarship-holder/list")
    public String scholarshipHolderList() {
        return "scholarshipHolder/list";
    }

    @RequestMapping("/scholarship-holder/card")
    public String scholarshipHolderCard() {
        return "scholarshipHolder/card";
    }

    @RequestMapping("/staff/load_content")
    public String staff(){return "staff/load_content";}
}
