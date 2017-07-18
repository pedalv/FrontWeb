# JSF
Start with JavaServer Faces.

# Tutorial
- [JavaServer Faces Technology](http://www.oracle.com/technetwork/java/javaee/javaserverfaces-139869.html) 

# Instaling the Tools
- [Java Development kit (JDK) 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [Java EE 7 SDK](http://www.oracle.com/technetwork/java/javaee/downloads/index.html)
- [GlassFish Tools - Install pluging from eclipse marketplace](https://marketplace.eclipse.org/content/glassfish-tools) 
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

# The Facelets Templating System
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

# Implementing Business Logic
- Managed Beans
-- Concepts: lifecycle management and dependency injection
-- A regular Java object, managed by a container
-- Container: Java EE application server
-- The container manages the lifecycleof the object
-- Client code lets the container provide the bean through dependency injection
- Contexts and Dependency Injection
-- EXAMPLE: ProductService
-- Is a ProductService object stateful or stateless?
-- How do I get an instance of the ProductService?
- Bean Scopes

# Using Managed Beans in Facelets Pages
- Expression Language

# Contexts and Dependency Injection
- Standard Java EE API
- Annotations
- Scopes (Making Beans Serializable)
-- CDI standard scopes
--- Package, javax.enterprise.context
--- Request scope: @RequestScoped, Single HTTP request-response cycle
---- Example: Holding query results
--- Session scope: @SessionScoped, HTTP user session 
---- Examples: User information, shopping cart content
--- Application scope: @ApplicationScoped, Application-wide, shared by all sessions
---- Example: Stateless objects that can be shared by all sessions
--- Conversation scope: @ConversationScoped, For the duration of a programmer-defined conversation
---- Example: The checkout process in a web shop 
-- JSF specific scopes
--- View scope: @ViewScoped, All requests while staying in the same view
--- Flow scope: @FlowScoped, Faces Flows
-- Choosing a Scope for Your Beans
-- Making Beans Serializable
- Dependency Injection
- Naming Beans
-- Name a bean with @Named
- CDI Bean Requirements: No arguments constructor, or constructor with @Inject
- Dependency Injection with @Inject

# Annotations
| Old Annotation | New Annotation |
| -------------- | -------------- |
| javax.faces.bean.RequestScoped | javax.enterprise.context.RequestScoped |
| javax.faces.bean.SessionScoped | javax.enterprise.context.SessionScoped |
| javax.faces.bean.ApplicationScoped | javax.enterprise.context.ApplicationScoped |
| javax.faces.bean.ViewScoped | javax.faces.view.ViewScoped |
| javax.faces.bean.ManagedBean | javax.annotation.ManagedBean and javax.inject.Named |
| javax.faces.bean.ManagedProperty | javax.inject.Inject |


# ps-jsf-helloworld 
- Basic app for introduction and overview of JavaServer Faces
 
# ps-jsf-musicshop  
-  Musicshop App for creating web pages using facelets
- Adding business logic using managed beans and expressions languag
- Handling user input
- Implementing page navigation
- Building your own components
- Using ajax
