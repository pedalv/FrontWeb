package no.jsf.musicshop;

import java.io.Serializable;
import java.util.Date;

import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

@Named
@SessionScoped
public class PrimeFaces implements Serializable {
	
	 
	private static final long serialVersionUID = 1L;
	
	private Date date;
	private String redirectURL;
	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	public String getRedirectURL() {
		return redirectURL;
	}

	public void setRedirectURL(String redirectURL) {
		this.redirectURL = redirectURL;
	}
	
	public void onload() {
		date = new Date();
		redirectURL = "https://github.com/primefaces/primefaces";
    }

}
