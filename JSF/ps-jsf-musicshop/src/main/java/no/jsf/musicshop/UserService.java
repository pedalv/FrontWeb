package no.jsf.musicshop;

public interface UserService {

    User getUser(String username);

    void saveUser(User user);
}
