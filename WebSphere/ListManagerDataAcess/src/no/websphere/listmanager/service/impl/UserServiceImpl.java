package no.websphere.listmanager.service.impl;

import java.util.List;

import no.websphere.listmanager.data.ListItemDao;
import no.websphere.listmanager.data.UserDao;
import no.websphere.listmanager.data.impl.ListItemDaoImpl;
import no.websphere.listmanager.data.impl.UserDaoImpl;
import no.websphere.listmanager.model.ListItem;
import no.websphere.listmanager.model.User;
import no.websphere.listmanager.service.UserService;

public class UserServiceImpl implements UserService {
	
	private final UserDao userDao;
	private final ListItemDao listItemDao;
	
	public UserServiceImpl() {
		//focus on learn websphere 
		//however in real world must use DI 
		this.userDao = new UserDaoImpl();
		this.listItemDao = new ListItemDaoImpl();
	}
	
	@Override
	public User authenticateUser(String username) {
		User user = null;
		
		if (username != null && !"".equals(username.trim())) {
			user = userDao.getUser(username);
		}
		
		return user;
	}
	
	@Override
	public List<ListItem> getListItems(Long userId) {
		return listItemDao.getListItemsByUserId(userId);
	}
}
