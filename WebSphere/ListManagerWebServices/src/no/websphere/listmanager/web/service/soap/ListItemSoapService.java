package no.websphere.listmanager.web.service.soap;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import no.websphere.listmanager.model.ListItem;
import no.websphere.listmanager.service.ListItemService;
import no.websphere.listmanager.service.impl.ListItemServiceImpl;

@WebService(serviceName = "ListItemSoapService")
public class ListItemSoapService {
	private final ListItemService listItemService;
	
	public ListItemSoapService() {
		// Use DI
		listItemService = new ListItemServiceImpl();
	}
	
	@WebMethod
	public ListItem add(
			@WebParam(name = "userId") Long userId,
			@WebParam(name = "value") String value) {
		return listItemService.addListItem(userId, value);
	}
	
	@WebMethod
	public ListItem update(
			@WebParam(name = "userId") Long userId,
			@WebParam(name = "listItemId") Long listItemId,
			@WebParam(name = "value") String value) {
		return listItemService.updateListItem(userId, listItemId, value);
	}
	
	@WebMethod
	public void delete(
			@WebParam(name = "userId") Long userId,
			@WebParam(name = "listItemId") Long listItemId) {
		listItemService.deleteListItem(userId, listItemId);
	}
}
