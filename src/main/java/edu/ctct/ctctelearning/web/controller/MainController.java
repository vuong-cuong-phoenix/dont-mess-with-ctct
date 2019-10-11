package edu.ctct.ctctelearning.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping({ "/", "", "/index" })
    public String root() {
        return "index";
    }

    @GetMapping("/sign-in")
    public String login(Model model) {
        return "account/sign-in";
    }

    @GetMapping("/user")
    public String userIndex() {
        return "user/index";
    }
}