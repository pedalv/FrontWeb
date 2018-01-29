package no.websphere.listmanager.web.model;

import java.util.List;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

import no.websphere.listmanager.model.ListItem;
import no.websphere.listmanager.service.UserService;
import no.websphere.listmanager.service.impl.UserServiceImpl;

@ManagedBean
@SessionScoped
public class UserBean {
	
	private final UserService userService;
	
	private Long userId;
	private String username;
	
	public UserBean() {
		userService = new UserServiceImpl();
	}
	
	public Long getUserId() {
		return userId;
	}
	
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public List<ListItem> getListItems() {
		return userService.getListItems(userId);
	}
}
