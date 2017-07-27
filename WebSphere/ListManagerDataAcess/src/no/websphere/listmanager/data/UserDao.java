package no.websphere.listmanager.data;

import no.websphere.listmanager.model.User;

public interface UserDao {
	User getUser(String username);
}
