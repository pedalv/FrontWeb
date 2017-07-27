package no.websphere.listmanager.service;

import java.util.List;

import no.websphere.listmanager.model.ListItem;
import no.websphere.listmanager.model.User;

public interface UserService {
	
	User authenticateUser(String username);
	
	List<ListItem> getListItems(Long userId);
	
}
