package edu.ctct.ctctelearning.web.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import edu.ctct.ctctelearning.model.User;
import edu.ctct.ctctelearning.service.UserService;
import edu.ctct.ctctelearning.web.dto.UserRegistrationDto;

@Controller
@RequestMapping("/sign-up")
public class UserRegistrationController {

    @Autowired
    private UserService userService;

    @ModelAttribute("user")
    public UserRegistrationDto userRegistrationDto() {
        return new UserRegistrationDto();
    }

    @GetMapping
    public String showRegistrationForm(Model model) {
        return "account/sign-up";
    }

    @PostMapping
    public String registerUserAccount(@ModelAttribute("user") @Valid UserRegistrationDto userDto,
            BindingResult result) {
        String email = userDto.getEmail() + "@" + userDto.getEmailDomain();
        User existing = userService.findByEmail(email);
        if (existing != null) {
            result.rejectValue("email", null, "There is already an account registered with that email");
        }

        if (result.hasErrors()) {
            return "account/sign-up";
        }

        userService.save(userDto);
        return "redirect:/sign-up?success";
    }
}