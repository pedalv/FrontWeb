#JSF
A easy solution for getting started with JavaServer Faces.

# Tutorial
- [JavaServer Faces Technology](http://www.oracle.com/technetwork/java/javaee/javaserverfaces-139869.html) 

# Instaling the Tools
- [Java Development kit (JDK) 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [Java EE 7 SDK](http://www.oracle.com/technetwork/java/javaee/downloads/index.html)
- [Eclipse IDE](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/keplersr2)
- [Apache Maven](https://maven.apache.org/download.cgi)


# JSF Standard Tag Libraries
- HTML, Standard HTML UI components, xmlns:h="http://xmlns.jcp.org/jsf/html"
- Facelets, Templating, xmlns:ui="http://xmlns.jcp.org/jsf/facelets"
- Core; Listeners, converters, validators, AJAX and more; xmlns:f="http://xmlns.jcp.org/jsf/core"
- Composite Components, Creating composite components, xmlns:cc="http://xmlns.jcp.org/jsf/composite"
- Passthrough Attributes, Support for HTML5, xmlns:p="http://xmlns.jcp.org/jsf/passthrough"
- Passthrough Elements, Support for HTML5, xmlns:jsf="http://xmlns.jcp.org/jsf"
- JSTL Core, JSP Standard Tag Library Core, xmlns:c="http://xmlns.jcp.org/jsp/jstl/core"
- JSTL Functions, JSP Standard Tag Library Functions, xmlns:fn="http://xmlns.jcp.org/jsp/jstl/functions"

# The FaceletsTemplating System
- ui:include, Inserts the content of another Facelets XHTML file, <ui:include src=“header.xhtml”/>
- ui:composition, Defines a page that uses a template 
```bash
<ui:composition template=“templ.xhtml”>
	<ui:define name=“content”>
		<h1>Popular Products</h1>
	</ui:define>
</ui:composition>
```
- ui:insert, Defines the point inside a template where content is to be inserted
- ui:define, Defines content to be inserted into the template
- ui:params, Passes a parameter to an included file or template
- ui:decorate, Applies a template to part of a page


