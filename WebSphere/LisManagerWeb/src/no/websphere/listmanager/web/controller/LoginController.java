package no.websphere.listmanager.web.controller;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.RequestScoped;

import no.websphere.listmanager.model.User;
import no.websphere.listmanager.service.UserService;
import no.websphere.listmanager.service.impl.UserServiceImpl;
import no.websphere.listmanager.web.model.UserBean;

@ManagedBean
@RequestScoped
public class LoginController {

	private final UserService userService;
	
	@ManagedProperty("#{userBean}")
	private UserBean userBean;
	
	public LoginController() {
		// use DI
		userService = new UserServiceImpl();
	}
	
	public String login() {
		String outcome = null;
		
		User user = userService.authenticateUser(userBean.getUsername());
		if (user != null) {
			userBean.setUserId(user.getId());
			// fix error in the middle of a request with a post
			outcome = "list?faces-redirect=true";
		}
		
		return outcome;
	}
	
	public void setUserBean(UserBean userBean) {
		this.userBean = userBean;
	}
}
