package no.websphere.listmanager.web.service.rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import no.websphere.listmanager.model.ListItem;
import no.websphere.listmanager.service.ListItemService;
import no.websphere.listmanager.service.UserService;
import no.websphere.listmanager.service.impl.ListItemServiceImpl;
import no.websphere.listmanager.service.impl.UserServiceImpl;
import no.websphere.listmanager.web.service.rest.viewmodel.ValueViewModel;

@Path("/user/{userId}/listItem")
public class ListItemResource {
	private final UserService userService;
	private final ListItemService listItemService;
	
	public ListItemResource() {
		// Use DI
		userService = new UserServiceImpl();
		listItemService = new ListItemServiceImpl();
	}
	
	// /rest/user/{userId}/listItem
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<ListItem> getAll(
			@PathParam("userId") Long userId) {
		return userService.getListItems(userId);
	}
	
	// /rest/user/{userId}/listItem
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ListItem add(
			@PathParam("userId") Long userId,
			ValueViewModel valueViewModel) {
		return listItemService.addListItem(userId, valueViewModel.getValue());
	}
	
	// /rest/user/{userId}/listItem/{listItemId}
	@PUT
	@Path("/{listItemId}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public ListItem update(
			@PathParam("userId") Long userId,
			@PathParam("listItemId") Long listItemId,
			ValueViewModel valueViewModel) {
		return listItemService.updateListItem(userId, listItemId, valueViewModel.getValue());
	}
	
	// /rest/user/{userId}/listItem/{listItemId}
	@DELETE
	@Path("/{listItemId}")
	public void delete(
			@PathParam("userId") Long userId,
			@PathParam("listItemId") Long listItemId) {
		listItemService.deleteListItem(userId, listItemId);
	}
}
