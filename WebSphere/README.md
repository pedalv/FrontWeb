# Documentation
- [Webphere application server](http://www-03.ibm.com/software/products/en/appserv-was)
- [How to download WebSphere Application Server for Developers V8.0 from Passport Advantage Online](http://www-01.ibm.com/support/docview.wss?uid=swg27021165)
- [WebSphere downloads](https://www.ibm.com/developerworks/websphere/downloads/index.html)
- [Download Webphere application server](https://www.ibm.com/developerworks/downloads/ws/was/)
- [Download WebSphere Application Server Express](https://www.ibm.com/developerworks/downloads/ws/wasexp/index.html)
- [Download WAS Liberty](https://developer.ibm.com/wasdev/downloads/)
- [Download No charge: WebSphere Application Server Developer Tools and WebSphere Application Server](https://www.ibm.com/developerworks/downloads/ws/wasdevelopers/index.html)
- [WebSphere Application Server (Distributed operating systems), Version 8.5.5](https://www.ibm.com/support/knowledgecenter/en/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/welcome_base.html)
- [Develop and run with WebSphere Liberty](https://developer.ibm.com/wasdev/)
- [Download the latest stable WebSphere Liberty runtime](https://developer.ibm.com/wasdev/downloads/download-latest-stable-websphere-liberty-runtime/)
- [IBM® WebSphere® Application Server for Developers - WAS V9.0 Trial](http://www-03.ibm.com/software/products/en/appserv-was)

# Installation Notes
- Need a IBMid account
- [Sign in to IBM](https://www-947.ibm.com/account/userservices/jsp/login.jsp?persistPage=true&page=/FIM2/sps/auth%3FFedName%3DIBM_WWW2_SAML20_EXTERNAL%26FedId%3Duuid701ae4b7-0145-1247-9531-cc6b0728b53f&PD-REFERER=https://developer.ibm.com/wasdev/downloads/&error=)
- [Download No charge: WebSphere Application Server Developer Tools and WebSphere Application Server](https://www.ibm.com/developerworks/downloads/ws/wasdevelopers/index.html)
> Install in D:\IBM\Installation Manager\eclipse
> Install Manager 1.8.7 for Windowns
> Install IBM Web Sphere Application Server for Developers
> Install (not need) IBM WebSphere SDK Java Technology Edition V7
> Install (not need) IBM WebSphere Application Server Liberty for Developers
- [Eclipse IDE for Java EE Developers](http://www.eclipse.org/downloads/packages/eclipse-ide-java-ee-developers/keplersr2)
- Install plugin to WebSphere in eclipse marketplace

# List Manager Application Project
ListManagerWebServices (WAR) - SOAP and RESTful Web Services - Dynamic Web Project
List ManagerWeb (WAR) - Web UI - Web Applications - Dynamic Web Project
ListManagerDataAccess (JAR) - Backend - Utility Project
ListManage (EAR) - Enterprise Application - Enterprise Application Project
WebSphere Application Server 

# Automated Testing Strategies - Use a Database - In memory database
- [H2](http://www.h2database.com/html/download.html)
- [Java Hamcrest](http://hamcrest.org/JavaHamcrest/)
- [Java Hamcrest GitHub Download](https://github.com/hamcrest/JavaHamcrest)
- [hamcrest - HamcrestDistributables.wiki](https://code.google.com/archive/p/hamcrest/wikis/HamcrestDistributables.wiki)
- [junit](http://junit.org/junit4/)
- [tomcat](https://tomcat.apache.org/)

# ListManager project, [http://localhost:8080/ListManagerWeb/faces/login.xhtml](http://localhost:8080/ListManagerWeb/faces/login.xhtml)
Use websphere to run, deploy the List Manager Application project

# [Web Services Tutorial](https://www.javatpoint.com/web-services-tutorial)
## Web Service components
- SOAP
> SOAP is an acronym for Simple Object Access Protocol.
> SOAP is a XML-based protocol for accessing web services.
> SOAP is a W3C recommendation for communication between applications.
> SOAP is XML based, so it is platform independent and language independent. In other words, it can be used with Java, .Net or PHP language on any platform.

- WSDL
> WSDL is an acronym for Web Services Description Language.
> WSDL is a xml document containing information about web services such as method name, method parameter and how to access it.
> WSDL is a part of UDDI. It acts as a interface between web service applications.
> WSDL is pronounced as “wiz-dull”.

- WSDL
> WSDL is an acronym for Web Services Description Language.
> WSDL is a xml document containing information about web services such as method name, method parameter and how to access it.
> WSDL is a part of UDDI. It acts as a interface between web service applications.

- UDDI
> UDDI is an acronym for Universal Description, Discovery and Integration.
> UDDI is a XML based framework for describing, discovering and integrating web services.
> UDDI is a directory of web service interfaces described by WSDL, containing information about web services. 

## SOAP Web Services
> SOAP stands for Simple Object Access Protocol. 
> It is a XML-based protocol for accessing web services.
> SOAP is a W3C recommendation for communication between two applications.
> SOAP is XML based protocol. 
> (+) It is platform independent and language independent: SOAP web services can be written in any programming language and executed in any platform.
> By using SOAP, you will be able to interact with other programming language applications.
> (+) WS Security: SOAP defines its own security known as WS Security.
> HTTP POST, [JMS](https://www.javatpoint.com/jms-tutorial), etc
> (-) Slow: SOAP uses XML format that must be parsed to be read. It defines many standards that must be followed while developing the SOAP applications. So it is slow and consumes more bandwidth and resource.
> (-) WSDL dependent: SOAP uses WSDL and doesn't have any other mechanism to discover the service.
- [http://localhost:8080/ListManagerWebServices/UserSoapService?wsdl](http://localhost:8080/ListManagerWebServices/UserSoapService/UserSoapService.wsdl)
- [http://localhost:8080/ListManagerWebServices/ListItemSoapService?wsdl](http://localhost:8080/ListManagerWebServices/ListItemSoapService?ListItemSoapService.wsdl)
- [SoapUI](https://www.soapui.org/)

## RESTful web services
> REST stands for REpresentational State Transfer.
> REST is an architectural style not a protocol.
> HTTP-Based
> (+) Fast: RESTful Web Services are fast because there is no strict specification like SOAP. It consumes less bandwidth and resource.
> (+) Language and Platform independent: RESTful web services can be written in any programming language and executed in any platform.
> (+) Can use SOAP: RESTful web services can use SOAP web services as the implementation.
> (+) Permits different data format: RESTful web service permits different data format such as Plain Text, HTML, XML and JSON.
- [http://localhost:9080/ListManagerWebServices/rest/user/?username=pedro](http://localhost:8080/ListManagerWebServices/rest/user/?username=pedro)
- [http://localhost:9080/ListManagerWebServices/rest/user/1/listItem](http://localhost:9080/ListManagerWebServices/rest/user/1/listItem)
- 


## [SOAP vs Web Services ](https://www.javatpoint.com/soap-vs-rest-web-services)