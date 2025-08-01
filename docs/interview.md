# Fuse’s platform

Lending is a cornerstone of the financial industry, it enables consumers and businesses to access the funds they need while providing financial institutions with revenue from interest and fees.

Consumer LOS (Loan Origination System) is Fuse’s end-to-end platform for managing consumer loan applications (e.g. auto loans, personal loans). Its purpose is to streamline the entire loan process – from application intake and underwriting to closing – with an emphasis on automation and user-friendly design. The Consumer LOS centralizes all lending operations into one system and offers deep configurability. Key components of the Consumer LOS include:

- Queues: A pipeline management system that organizes loan applications by status and priority. Queues help your team work efficiently by grouping applications (e.g. “New Applications”, “Pending Verification”, “Ready for Decision”) and routing them to the right team members.

  ![Queues Page](./images/01.%20queues-page.png)

- Application Details: A comprehensive view of each loan application’s information. This page aggregates all applicant data, loan terms, and relevant details in one place. Team members can review personal info, requested loan amount, collateral (like vehicle details), and more – essentially a one-stop summary of the application.

  ![Application Details Page](./images/09.%20application-details-page.png)

> **Rest of the pages|products descriptions are out of scope for this exercise**

# Queues

### Navigation

- Primary navigation: Primary navigation `Queues` is built by the `Queues Configuration` page, so all menu list should be dynamic - The Current page is highlighted - On hover the icon is rendered

  ![Application Details Page](./images/02.%20queues-page-primary-navigation.png)

- Secondary navigation

  This menu is static, main purpose is to route to settings pages

  ![Application Details Page](./images/02.%20queues-page-secondary-navigation.png)

### Features

- Search: When enabled in settings, users can search for applications across the queue. Searchable fields: Application Number, Applicant or Co-applicant Name, Dealer Name.

  ![Alt text](./images/07.%20queues-page-search.png)

- Recent visite: Recent visited apps are shown once you focus the search input field

  ![Alt text](./images/08.%20queues-page-recent-visited-app.png)

- Real-Time Updates:
  - New applications should appear in the queue without refreshing the page.
  - Status changes should automatically move the application to the correct queue.
  <!-- - Queue counts should update in real time. -->

# Queues Configuration

The Queues Configuration page allows admins or authorized users to define how applications are grouped into queues. Each queue is based on custom filter rules, which determine which applications appear under it.

![Queues Configuration Page](./images/03.%20queues-configuration.png)

### Features

- Create a New Queue

  ![Create a New Queue](./images/04.%20queues-configuration-create-queue.png)

- Edit and Delete

  ![Create a New Queue](./images/05.%20queues-configuration-actions.png)
