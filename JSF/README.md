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
> Concepts: lifecycle management and dependency injection.

> A regular Java object, managed by a container.

> Container: Java EE application server.

> The container manages the lifecycleof the object.

> Client code lets the container provide the bean through dependency injection.

- Contexts and Dependency Injection
> EXAMPLE: ProductService.

> Is a ProductService object stateful or stateless?

> How do I get an instance of the ProductService?

- Bean Scopes

# Using Managed Beans in Facelets Pages
- Expression Language

# Contexts and Dependency Injection
- Standard Java EE API
- Annotations
- Scopes (Making Beans Serializable)
> Choosing a Scope for Your Beans.

> Making Beans Serializable.

1 CDI standard scopes
- Package, javax.enterprise.context

1.1 Request scope: @RequestScoped, Single HTTP request-response cycle.

1.1.1 Example: Holding query results.

1.2 Session scope: @SessionScoped, HTTP user session. 

1.2.1 Examples: User information, shopping cart content.

1.3 Application scope: @ApplicationScoped, Application-wide, shared by all sessions.

1.3.1 Example: Stateless objects that can be shared by all sessions.

1.4 Conversation scope: @ConversationScoped, For the duration of a programmer-defined conversation.

1.4.1 Example: The checkout process in a web shop. 

2 JSF specific scopes

2.1 View scope: @ViewScoped, All requests while staying in the same view.

2.2 Flow scope: @FlowScoped, Faces Flows.

- Dependency Injection
- Naming Beans
> Name a bean with @Named
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

# Lifecycle Phases
## The FacesContextobject stores all context information for processing the current request
## Execute
1 Restore View

1.1 Create a new, empty component tree

1.2 or Restore the component tree

2 Apply Request Values

3 Process Validations

4 Update Model Values

5 Invoke Application

##Render

6 Render Response

6.1 Populate the component tree

6.2 Render the page (generate HTML) 

6.3 Save the component tree

6.4 or Populate the component tree, generate HTML, save the component tree

# Adding a Listener 
## for Action Events
1.1 
```bash
<h:commandButtonid="submit" value="Submit"actionListener="#{myBean.actionPerformed}"/>
```
1.2 
```bash
<h:commandButtonid="submit" value="Submit">
 <f:actionListenertype="com.mypackage.MyListener"/>
</h:commandButton>

@Named
@RequestScoped 
public class MyBean{
	public void actionPerformed(ActionEventevent){
		//...
	}
}
```
## for Value Change Events
2.1
```bash
<h:inputTextid="username" value="#{signIn.username}" valueChangeListener="#{myBean.valueChanged}">
```
2.2
```bash
<h:inputTextid="username" value="#{signIn.username}">
 <f:valueChangeListenertype="com.mypackage.MyListener"/>
</h:inputText>
```
## System Events
- System-level events
- Register listeners using <f:event>
> Attribute type is the name of the event type
> Attribute listenerrefers to a method to handle the event
- System event types
> postAddToView
> preValidate
> postValidate
> preRenderView
> preRenderComponent

# Navigation 
```bash
<h:outputLinkvalue="index.xhtml">Back to Popular Products</h:outputLink> or
<h:link value="Back to Popular Products" outcome="index"/>

<a href="index.xhtml">Back to Popular Products</a>
```

## Kinds of Flow Nodes
- View node
> Display a view (page)
- Method call node
> Call a method
- Switch node
> Select one of a series of cases
- Return node
> End the flow
- Flow call node
> Call another flow

## Configuring Flows
- XML configuration file
> In faces-config.xmlor in a separate file
- In Java using the flow builder API
> CDI producer method with @FlowDefinitionannotation

# Create a Custom Tag Library
- Create tag files
> Facelets template files with ui:composition
- Create a Faceletstag library descriptor
> Describes the tags of the tag library
- Register the tag library
> Add a context parameter to web.xml

# Creating Composite Components
- Components are self-contained
> Interface and implementation are separated
> Implementation details are hidden
- Components are more powerful than tags
> A component contains its own data and logic
> Converters and validators
> Events

# The f:ajaxTag
## Send an AJAX request when a component fires an event
> Clicking a button or link
> Changing the value of a text input component
> A component gaining or losing focus
> Mouse or keyboard interaction

```bash
<h:inputTextvalue="#{userDetails.user.username}">
	<f:ajax event="For which type of event the AJAX request should be performed"
			execute="Which components should participate in the execute phase of the lifecycle"
			render="Which components should participate in the render phase of the lifecycle"
			...
			listener="attach a server-side event listener"
			onevent="attach a client-side event listener"
			onerror="attach a client-side error handler" />
</h:inputText>11
```
## Execute and Render Attributes
> @all, all components on the page
> @form, all components in the form
> @this, the component itself
> @none, no components

# ps-jsf-helloworld ([http://localhost:8080/ps-jsf-helloworld/](http://localhost:8080/ps-jsf-helloworld/))
- Basic app for introduction and overview of JavaServer Faces 
 
# ps-jsf-musicshop  ([http://localhost:8080/musicshop/](http://localhost:8080/musicshop/))
-  Musicshop App for creating web pages using facelets
- Adding business logic using managed beans and expressions languag
- Handling user input
- Implementing page navigation
- Building your own components
- Using ajax
