package com.fullstack.cbit.controller;

import com.fullstack.cbit.exception.UserNotFoundException;
import com.fullstack.cbit.model.User;
import com.fullstack.cbit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3005")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @PostMapping("/adduser")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    @GetMapping("/getUsers")
    List<User> getUser(){
        return userRepository.findAll();
    }
    @PutMapping("/update/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id).map(user -> {
            user.setPassengerName(newUser.getPassengerName());
            user.setEmail(newUser.getEmail());
            user.setPhoneno(newUser.getPhoneno());
            user.setFlightName(newUser.getFlightName());
            user.setDepature(newUser.getDepature());
            user.setDestination(newUser.getDestination());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }
    @GetMapping("/finduser/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)

                .orElseThrow(()->new UserNotFoundException(id));
    }
    @DeleteMapping("/deleteUser/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "deleted user";
    }
}
