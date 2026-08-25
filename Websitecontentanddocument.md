# BayanatiHub — Content Inventory

Every page, heading, and paragraph currently published on the site.
English content is written out in full; Arabic exists as a parallel translation (see §6).

**Product documented:** BayanatiHub — a unified data platform with role-based governance,
controlled access, and self-service analytics.

**Audiences:** two documentation tracks — *As Admin role* (16 pages) and *As User role* (8 pages).

**Languages:** English (`/docs/`) and Arabic (`/ar/docs/`).

---

## Table of contents

1. [Homepage](#1-homepage)
2. [Documentation overview page](#2-documentation-overview-page)
3. [Admin documentation](#3-admin-documentation)
4. [User documentation](#4-user-documentation)
5. [Recurring UI text](#5-recurring-ui-text)
6. [Arabic content](#6-arabic-content)
7. [Placeholder content still live](#7-placeholder-content-still-live)

---

# 1. Homepage

Route: `/` · English only · 11 sections

### 1.1 Hero

> # Unify your data. Govern access. Enable *self-service* analytics.
>
> BayanatiHub enables teams to discover, govern, and use data with confidence through
> structured access, metadata management, and intelligent workflows.

**Buttons:** Book a demo · Explore product

**Stats:** `25M+` assets indexed · `99.9%` uptime SLA · `SOC 2 · GDPR` enterprise ready

### 1.2 Integrations

*Eyebrow:* Integrations

> ## Enterprise visibility, at scale.
>
> Connect your existing data stack and gain immediate clarity — across warehouses, BI tools,
> lakes, and pipelines.

**Connector logos shown:** Databricks · Snowflake · Tableau · AWS Redshift · PostgreSQL ·
Power BI · Qlik · BigQuery

**Footnote:** "+120 connectors and a public OpenAPI for everything else" · link: *Browse all integrations*

### 1.3 Platform

*Eyebrow:* Platform

> ## Everything your data org needs, elegantly unified.
>
> Four foundations that turn scattered enterprise data into a clear, governed, self-service experience.

| Card | Copy |
|---|---|
| **Centralized Data Assets** | Map every table, dashboard, and API across your organization into one searchable, semantic layer. |
| **Access Governance** | Implement granular RBAC, approval workflows, and audit trails at enterprise scale. |
| **Self-Service Discovery** | Let analysts and engineers find the data they need with rich, trusted business context. |
| **Teams & Collaboration** | Align governance with context, sharing, and team-aware workflows that scale with your org. |

### 1.4 Journey

*Eyebrow:* Onboarding

> ## The journey to governance.
>
> From scattered systems to a curated data platform — usually within four weeks.

| Step | Title | Copy |
|---|---|---|
| 01 | **Connect** | Plug in your warehouses, lakes, BI tools, and pipelines through 120+ native connectors. |
| 02 | **Import** | Auto-ingest schemas, lineage, ownership, and metadata into a unified governed catalog. |
| 03 | **Request** | Users request access from any asset page; approvals flow to the right owners automatically. |
| 04 | **Explore** | Discover, query, and collaborate on trusted data — with full context and audit trails. |

### 1.5 Data Assets

*Eyebrow:* Discovery

> ## Data assets, simplified.
>
> View every data asset with rich semantic context. Understand what a table represents,
> who owns it, how it's being used — and whether you can trust it.

- **Automated tagging** — PII, sensitivity, and domain detected on ingest.
- **Health monitoring** — Freshness, volume, and quality SLAs at a glance.
- **Ownership & lineage** — See who owns each asset and where it flows.

Link: *Explore the catalog*

### 1.6 Access Requests

*Eyebrow:* Security

> ## Automated access requests.
>
> No more ticket chaos. Users request access directly from the asset page, triggering
> automated approval flows that route to the right owners — with full audit trails.

**Stats:** `80%` faster provisioning · `0` manual errors

**Checklist:**
- Policy-as-code with org-wide guardrails
- Time-bound, least-privilege access by default
- Slack & email notifications for approvers

### 1.7 More Tools

*Eyebrow:* More tools

> ## Built for the way data teams actually work.

| Tool | Copy |
|---|---|
| **Asset Connections** | Discover relationships between datasets, dashboards, and APIs automatically. |
| **Business Glossary** | A shared language of metrics, KPIs, and definitions across the organization. |
| **Teams & Spaces** | Workspaces with scoped permissions, ownership, and shared context per team. |
| **Project Planner** | Plan data initiatives with milestones, owners, and dataset dependencies. |

### 1.8 Enterprise Grade

*Eyebrow:* Enterprise grade

> ## Built for governed, secure, enterprise data operations.
>
> We provide the guardrails so your team can move faster. Centralize who knows what is built,
> who owns it, and how it's accessed — across every system in your stack.

- **SOC 2 Type II & GDPR-ready by design** — Continuous controls, automated evidence, region pinning.
- **End-to-end visibility across enterprise systems** — Lineage that spans warehouses, BI, lakes, and pipelines.
- **Configurable RBAC and audit trails** — Granular policies. Every action recorded. Tamper-proof.

**Compliance badges:** SOC 2 · GDPR · HIPAA · ISO 27001 · CCPA

**Stats:**
| Figure | Label | Meta |
|---|---|---|
| 99.9% | uptime reliability | MULTI-REGION · AUTOMATED FAILOVER |
| 25M+ | assets indexed | ACROSS 120+ DATA SOURCES |
| 1 platform | for governance, discovery & access | REPLACES 3–5 SINGLE-PURPOSE TOOLS |

### 1.9 Outcomes

*Eyebrow:* Outcomes

> ## Tailored for your outcomes.
>
> Whatever your data org is solving for next — BayanatiHub gets you there faster.

| | Title | Copy |
|---|---|---|
| Outcome 01 | **Data Governance** | Enforce policy at the asset level with automated classification, lineage, and full audit trails. |
| Outcome 02 | **Analytics Enablement** | Empower analysts to discover and trust data instantly — without filing tickets or guessing context. |
| Outcome 03 | **Cross-Team Collaboration** | Connect data producers and consumers with shared workspaces, glossaries, and ownership at scale. |

### 1.10 FAQ

> ## Frequently asked questions.
>
> Everything else you might want to know. Still curious? — *Talk to us*

**How does BayanatiHub handle data security?**
BayanatiHub is SOC 2 Type II and GDPR compliant. All data is encrypted at rest with AES-256 and
in transit with TLS 1.3. We support customer-managed keys (CMK), region pinning, SSO/SAML, and
granular RBAC. We never store your raw data — only metadata and lineage.

**Can we integrate with our existing SSO?**
Yes. BayanatiHub supports SAML 2.0 and OIDC, with SCIM provisioning for Okta, Azure AD,
Google Workspace, and more. Roles and groups map automatically to your governance policies.

**What data sources are supported?**
120+ native connectors across warehouses, lakes, BI tools, and orchestration — plus a public
OpenAPI to catalog anything else.

**Is there a trial period available?**
Every plan starts with a 14-day trial. No credit card required, and you can cancel any time.

**How does automated lineage work?**
We parse query logs, dbt manifests, and connector metadata to reconstruct column-level lineage
automatically — kept fresh as your pipelines change.

### 1.11 Get Started

*Eyebrow:* Get started

> ## Manage your data with clarity, control, and confidence.
>
> Join the next generation of data-driven enterprises that prioritize trust over chaos.

**Buttons:** Book a demo · Start free trial
**Perks:** 14-day trial · No credit card required · Cancel any time

### 1.12 Header & footer

**Header nav:** Product · Solutions · Documentation · About · Log in

**Footer tagline:** "The modern orchestration layer for enterprise data operations."

| Product | Resources | Company | Trust |
|---|---|---|---|
| Features | Documentation | About | Security |
| Integrations | Guides | Contact | Compliance |
| Pricing | API Reference | Careers | SOC 2 report |
| Changelog | Status | Privacy Policy | SLA |
| Roadmap | Community | Terms | DPA |

**Footer bottom:** © {year} BayanatiHub Inc. All rights reserved. · All systems operational · EN · Privacy · Cookies

---

# 2. Documentation overview page

Route: `/docs/` · Title: **Introduction**

> A unified data platform with role-based governance, controlled access, and self-service analytics.

Two card grids link into the documentation.

### As Admin role

| Card | Description |
|---|---|
| Access Requests | Manage how and when users can request platform entry. |
| Identity Providers | Configure SSO and external authentication methods. |
| Data Assets | Define permissions for viewing and editing global data. |
| Analytics Engine | Manage processing power and query permissions. |
| Assets Connector | Configure authentication for external data sources. |
| Theme Settings | Customize the visual branding and white-labeling. |
| Classifications | Set rules for sensitive data labeling and tags. |
| Users | Manage account status, roles, and Policies. |
| Glossary | Manage business terms and enterprise definitions. |
| Domains | Verify and manage registered organizational domains. |
| Lists | Control access to curated data collections and registries. |
| Projects | Oversight of all active project workspaces. |

### As User role

| Card | Description |
|---|---|
| Form builder | Create and share custom data collection forms. |
| Access Requests | Track the status of your pending resource requests. |
| Datasets | View and manage the data tables you have access to. |
| Data Assets | Browse assets shared with you or your department. |
| Dashboard | Access your personalized data visualizations Dashboard. |
| Planner & Tasks | Organize project timelines and assign action items. |
| Team & Spaces | Manage members within your specific workspaces. |
| Projects | View and collaborate on your assigned projects. |

---

# 3. Admin documentation

## 3.1 Access Requests

`/docs/access-requests/` — *Manage how and when users can request platform entry.*

**Intro:** Users can request access when:
- A dataset is published but not assigned to them.
- A dashboard exists but requires permission.
- They need additional privileges, such as adding members to a space or assigning licenses.

**Sections:** Conditions for Approval · Steps to Review Access Requests · Additional Information

**Steps to Review Access Requests**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Access Requests tab from the main admin dashboard | The tab displays all pending, approved, and rejected requests in a unified view. |
| 2 | Filter requests by status, date, or requester | Use the filter controls at the top of the page to narrow down the request list. |
| 3 | Select a specific request to view full details | Click on any request row to open the detailed view panel showing requester information, requested asset, access level, Comment, and Activity & Audit. |
| 4 | Approve or reject the request with optional comments | Provide feedback or any conditions for approval so the review history stays clear. |
| 5 | The requester receives an email notification of the decision | Automated notifications keep all stakeholders informed of access changes. |

**Additional Information**
- When navigating to the My Requests tab, all requests submitted to me will be displayed.
- By clicking on Export, the data will be exported.
- By clicking on the View (eye) icon, the details of the selected request will appear, along with the audit log to track the request status.

## 3.2 Data Assets

`/docs/data-assets/` — *Define permissions for viewing and editing global data.*

**Intro:** The Data Assets tab provides a comprehensive view of all data sources, databases,
pipelines, dashboards, and metadata within BayanatiHub. Administrators can along with filtering
and organization capabilities. *(sentence appears truncated in source)*

**Steps to Manage Data Assets**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Data Assets tab | Access the central catalog of all organizational data assets. |
| 2 | Browse or search for specific data assets | Use the search bar and filters to locate datasets, databases, or specific tables. |
| 3 | Select an asset to view its details page | View schema information, lineage, usage statistics, and the stored metadata. |
| 4 | Add or edit metadata including description, tags, and custom properties | Provide feedback or conditions for approval to maintain an audit trail. |
| 5 | Assign ownership and stewardship roles | Designate data owners and stewards responsible for data quality and governance. |
| 6 | Set data classification and sensitivity levels | Apply appropriate security classifications (Public, Internal, Confidential, Restricted). |
| 7 | Configure access policies and permissions | Define who can view, query, or modify the data asset. |
| 8 | Publish changes to make them visible to users | Publish changes to make them visible to users. |

**Note**
- Only published assets are visible to other users.
- Draft assets are only visible to their creator.
- Deletion is allowed only before publishing.
- Access permissions control how users can interact with the asset.

## 3.3 Assets Connector

`/docs/assets-connector/` — *Connect external data sources and import their metadata into the platform.*

**Intro:** The Assets Connector allows administrators to connect external data sources and bring
their metadata into BayanatiHub for discovery, governance, and monitoring. Supported integrations
include structured databases, BI dashboards, metadata services, and data pipeline tools, each with
its own connection settings and sync behavior.

**Supported source types**

| Type | Examples |
|---|---|
| Databases | SQL Server, Oracle, PostgreSQL, and similar sources. |
| Dashboards | Tableau, Power BI, and dashboard reporting platforms. |
| Metadata Sources | Catalog tools and metadata services such as Collibra. |
| Data Pipelines | ETL, ELT, and orchestration tools used for data movement. |

**Steps to Connect a Data Source**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Assets Connector tab | Open the connector workspace to review existing integrations, their status, and recent sync activity. |
| 2 | Click Add New Connector | Start a new connection setup by creating a connector record for the external system you want to integrate. |
| 3 | Select the connector type from the available options | Choose the source category that matches your integration, such as a database, dashboard, metadata source, or pipeline tool. |
| 4 | Enter the connection details | Provide the hostname, port, database or workspace name, authentication method, and credentials required by the selected service. |
| 5 | Test the connection before saving | Validate credentials and network reachability so the system can confirm the source is accessible. |
| 6 | Configure metadata extraction settings | Define which schemas, catalogs, tables, folders, or filters should be included when metadata is ingested. |
| 7 | Set the extraction schedule | Choose how often the connector should sync metadata, such as hourly, daily, or weekly. |
| 8 | Save and activate the connector | Once enabled, the connector becomes available for metadata imports and scheduled synchronization. |

**Steps to Import Metadata**

| # | Step | Detail |
|---|---|---|
| 1 | Select an active connector from the list | Open a configured connector to review its health, last run information, and available sync actions. |
| 2 | Run Import Metadata or wait for the scheduled sync | Use a manual import when you want to pull recent source changes immediately instead of waiting for the next scheduled run. |
| 3 | Monitor the import progress in the connector dashboard | Progress indicators help you track background extraction jobs while metadata is being collected and processed. |
| 4 | Review the import logs for warnings or errors | Use the sync logs to identify authentication issues, parsing failures, or skipped objects that need follow-up. |
| 5 | Verify that imported assets appear in Data Assets | After a successful sync, the discovered assets become searchable and manageable from the Data Assets area. |

**Important**
- Available connection fields vary depending on the selected connector type.
- Valid credentials and network access are required to establish a successful connection.
- Metadata sync schedules should match how frequently the external source changes.

## 3.4 Classifications

`/docs/classifications/` — *Create, manage, and retire classification labels for governed data assets.*

**Intro:** The Classifications section helps administrators define sensitivity and governance labels
that can be applied to datasets, tables, dashboards, and other managed assets across BayanatiHub.
These labels support consistent handling of sensitive information by making it easier to organize
assets, apply policy rules, and communicate risk to users across the platform.

**Steps to Create a Classification**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Classifications tab | Open the classifications workspace to review the list of existing labels and governance settings. |
| 2 | Click Create Classification | Start a new classification record for the label you want administrators and data owners to use. |
| 3 | Enter the classification name and description | Provide a clear name, purpose, and business explanation so the label is easy to understand and apply correctly. |
| 4 | Define the label appearance and severity | Choose the display styling, level, or visual indicator that helps users quickly recognize the classification. |
| 5 | Configure classification rules or criteria | Add the logic, conditions, or governance guidance that determines when this classification should be used. |
| 6 | Review the summary before saving | Confirm the details are accurate so the new classification can be reused consistently across assets. |
| 7 | Save and publish the classification | The new label becomes available for administrators and stewards to assign to relevant data assets. |

**Steps to Edit a Classification**

| # | Step | Detail |
|---|---|---|
| 1 | Open an existing classification from the list | Select the label you want to update to review its current definition, rules, and usage details. |
| 2 | Click Edit to modify the classification | Switch the classification into edit mode to adjust its metadata, display label, or governance logic. |
| 3 | Update the required fields | Revise the name, description, level, or criteria to reflect the latest governance standards. |
| 4 | Review impacted usage and dependencies | Check where the classification is already applied so changes remain clear and do not create confusion for users. |
| 5 | Save the updated classification | The revised definition is applied across the platform wherever the classification is referenced. |

**Steps to Delete a Classification**

| # | Step | Detail |
|---|---|---|
| 1 | Select the classification you want to remove | Open the target classification from the list and verify that you are working on the correct governance label. |
| 2 | Review where the classification is currently used | Check whether the label is assigned to existing assets so you can avoid breaking governance workflows unexpectedly. |
| 3 | Confirm the delete action | Approve the removal only after validating that the classification is no longer needed or has been replaced. |
| 4 | Verify the classification is removed from the list | The deleted classification should no longer appear as an available option when labeling assets. |

**Important**
- Use clear naming conventions so classifications are easy to distinguish and apply correctly.
- Before deleting a classification, review any assets that still depend on it.
- Changes to classifications can affect governance workflows, reporting, and access policy interpretation.

## 3.5 Glossary

`/docs/glossary/` — *Manage business terms and enterprise definitions.*

**Intro:** The Business Glossary provides a centralized repository of business terms and definitions.
It helps establish a common business vocabulary across the organization, ensuring consistent
understanding of data concepts. Terms can be linked to data assets to provide business context.

**Glossary Terms** — the glossary includes the following core information:

| Field | Meaning |
|---|---|
| Name | Business term name. |
| Description | Short definition of the term. |
| Tags | Optional related tags. |
| Usage | Used across assets & classifications. |
| Actions | Options to manage glossary terms. |

**Creating a Glossary and Terms**
- **Create Glossary** — Update the term name, description, or tags.
- **Create Term** — Add a new term inside the selected glossary.
- **Required Fields** — Open fields: class assets, and optional tags.

Click Save to create the glossary term.

**Managing Glossary Terms**
- **Edit Term** — Update the term, click Edit, update the required fields then click Save.
- **Delete Term** — Remove the term when it is no longer needed.
- **More Actions** — Open the three-dot menu to edit or delete the selected term.

**Editing / Deleting a Glossary Term**
- **Edit** — Select the term, click Edit, update the required fields, use click Save.
- **Delete** — Open the three-dot menu and choose delete for the selected term.

> ⚠ Deleted terms may affect linked assets, classifications, or domains.

## 3.6 Lists

`/docs/lists/` — *Organize curated collections of data assets.*

**Intro:** Lists allow administrators to create and manage curated collections of data assets.
These collections can be used for organizing assets by project, department, data domain, or any
custom grouping criteria. Lists help users discover related assets and maintain logical groupings.

**Steps to manage lists**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Lists tab | Open the area where existing curated collections are managed. |
| 2 | Click 'Add New List' | Open the list creation form to start a new collection. |
| 3 | Enter the list name and description | Provide context about the purpose, ownership, and intended scope of the list. |
| 4 | Add the values or assets | Select the items, datasets, or assets that belong in this curated list. |
| 5 | Save the list | The list becomes available according to the configured visibility settings. |

**Additional Information**
Lists can be shared with specific users or teams, or made publicly accessible to all platform users.
Membership is dynamic, so when an asset is removed from the platform it is automatically removed
from any lists that reference it. Users can also subscribe to lists to receive notifications when
assets are added or removed.

## 3.7 Identity Providers

`/docs/identity-providers/` — *Configure SSO and external authentication methods.*

**Intro:** BayanatiHub supports enterprise Single Sign-On (SSO) through integration with external
identity providers. Administrators can configure identity providers such as Active Directory (AD)
and Active Directory Federation Services (ADFS). This enables secure authentication, centralized
access management, and a seamless login experience across the platform.

**Steps to Configure Identity Provider**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Identity Providers tab | View configured SSO providers and their current activation status. |
| 2 | Click 'Add Identity Provider' | Open the identity provider setup flow. |
| 3 | Select provider type (AD, ADFS) | Choose the provider that matches your organization's identity infrastructure. |
| 4 | Enter provider details (Entity ID, SSO URL, Certificate) | Map identity provider attributes to BayanatiHub user fields such as name, email, and groups. |
| 5 | Test the SSO configuration | Validate the authentication flow in a safe test scenario before enabling it broadly. |
| 6 | Activate the identity provider | Users can then authenticate using SSO from the platform login page. |

## 3.8 Analytics Engine

`/docs/analytics-engine/` — *Configure connected analytics engines and BI integrations.*

**Intro:** The Analytics Engine provides powerful capabilities for data profiling, quality
assessment, and usage analytics. Administrators can configure automated data quality checks,
profiling jobs, and monitoring rules to maintain high data quality standards across the platform.

**Overview** — a "Configured Analytics Engines" table with an *+ Add Engine* action:

| Engine Name | Type | Status | Last Connected |
|---|---|---|---|
| Qlik Sense Engine — *Primary engine for dashboards* | Qlik Sense | Active | May 21, 2025 10:30 AM |
| Power BI Engine — *Connected successfully* | Power BI | Active | May 19, 2025 02:15 PM |
| Tableau Engine — *Connected successfully* | Tableau | Inactive | May 15, 2025 09:45 AM |

**Additional Information**
- If only one engine is connected, all dashboards will use that engine automatically.
- You can add and switch between multiple BI engines at any time.

## 3.9 Theme Settings

`/docs/theme-settings/` — *Customize the visual appearance of BayanatiHub to match your organization's brand identity.*

**Intro:** Theme settings allow you to configure colors, typography, logos, and other visual
elements that affect the user interface.

**Logo & Icon** — this section allows you to upload and manage branding assets:

| Asset | Purpose |
|---|---|
| Full Logo | The main platform logo |
| Compact Logo | A simplified version used in smaller UI areas (e.g., sidebar) |
| Favicon | The browser tab icon |

**Typography** — you can configure the font families used across the platform:
Font Family (English) · Font Family (Arabic)

**Brand Color Seeds** — this section defines the primary color scheme of the platform.
These colors are automatically applied across the UI:

| Name | Value | Use |
|---|---|---|
| Primary | `#009AD6` | Main brand color |
| Error | `#EF4444` | Used for error messages |
| Success | `#22C55E` | Used for success messages |
| Warning | `#F59E0B` | Used for warning alerts |
| Info | `#6366F1` | Used for informational messages |

The system automatically generates tonal palettes based on these selected colors.

**Live Preview** — displays a real-time preview of how the selected fonts and colors will appear
across the platform: Buttons (Primary / Outline / Danger), Actions (Save Changes, Rest to Default),
and System Messages in all four tones (info, success, error, warning).

**Note**
- Changes to Theme Settings apply platform-wide immediately after saving.
- Uploaded logos must be SVG or PNG with a transparent background for best results.
- Color seeds are used to generate full tonal palettes — avoid very dark or very light seed values.
- The Live Preview reflects the current unsaved state; publish to apply changes to all users.

## 3.10 Users

`/docs/users/` — *Manage users, roles, and policies from one administration workspace.*

**Intro:** Manage platform access from a single workspace that brings together users, assigned
roles, and governance policies. Administrators can review account activity, control permissions,
and align user access with organizational governance rules without leaving the Users section.

A hub page linking to three sub-pages:

- **Users Section** — View and manage all platform users including roles, license status, and account access settings.
- **Roles Section** — Use roles to define access bundles and connect permissions to different user groups.
- **Policies Section** — Policies make governance rules actionable by defining what users and roles can do.

### 3.10.1 Users Section

`/docs/users/users-section/` — *View and manage all platform users including roles, license status, and account access settings.*

**User Information** — each user record includes the following information:

| Field | Meaning |
|---|---|
| ID | Unique identifier for the user. |
| Name | User's full name. |
| Email | User's email address. |
| Directory | Source of the user account (e.g., Database or Active Directory). |
| Role | Assigned role (e.g., Admin, Data Analyst, Viewer). |
| Licenses | Indicates Professional or Analyzer licenses. |
| Status | Indicates whether the user account is active or inactive. |
| Actions | Options to manage the user. |

**Finding and Customizing Users**
- **Search** — Use the search bar to find users by name, email, or ID.
- **Filters & Columns** — Use filters to narrow down results and select which columns to display.
- **Add User** — Click on Add User to create a new user account.

**Managing Users** — from the Actions column, you can:
- **Edit User Details** — Update user details such as role, name, and other information using the edit icon.
- **View User Information** — View detailed information about the user using the view icon.
- **More Actions** — Access additional management options from the actions menu.

> **Important:** Disabled users will not be able to access the platform.

### 3.10.2 Roles Section

`/docs/users/roles-section/` — *Manage roles and control user permissions through assigned policies within BayanatiHub.*

**Roles List** — the roles list displays the following details:

| Field | Meaning |
|---|---|
| ID | Unique identifier for each role. |
| Role Name | Name of the role (e.g., Admin, Viewer, Data Analyst). |
| Description | Brief description of the role's permissions. |
| Directory | Indicates whether the role is active or inactive. |

**Finding and Customizing Users**
- **Search** — Use the search bar to quickly find a specific role.
- **Filters & Columns** — Customize the displayed data using filters or by selecting visible columns.
- **Add New Role** — Click on Add New Role to create a new role.

**Managing Users** — from the Actions column, you can:
- **Manage Policy** — Assign or update policies linked to the role.
- **Edit Role** — Modify the role name or description using the edit icon.
- **Delete Role** — Remove the role using the delete icon.

**Status Management** — toggle the role status to activate or deactivate it.

> **Important:** Disabled users will not be able to access the platform.

### 3.10.3 Policies Section

`/docs/users/policies-section/` — *Create and manage access policies that define permissions and control what users can view or perform within BayanatiHub.*

**Policies List**

| Field | Meaning |
|---|---|
| Policy Name | Name of the policy. |
| Type | System: Default policies. Custom: User-created. |
| Description | Brief explanation of the policy purpose. |
| Rules | Number of rules defined within the policy. |

**Finding and Customizing Users**
- **Search** — Use the search bar to find a specific policy.
- **Filters & Columns** — Customize the displayed data as needed.
- **Add Policy** — Click on Add Policy to create a new policy.

**Managing Users** — from the Actions column, you can:
- **View Policy Details** — View policy information and rules.
- **Edit Policy** — Edit the policy name, description, and rules.
- **Delete Policy** — Delete the policy (for custom policies only).

> ⚠ **Important:** System policies cannot be deleted.

## 3.11 Domains

`/docs/domains/` — *This tab allows you to create and manage domains, which are used to organize
data assets, and group related tags and glossary terms under a unified governance structure.*

**Domain information** — each domain shows basic information such as:

| Field | Meaning |
|---|---|
| Name | Domain name for easy identification. |
| Owners | Primary owners responsible for the domain. |
| Tags | Common tags associated with the domain. |
| Glossary Terms | Relevant glossary terms linked to the domain. |

**Finding and Customizing Domains**
- **Search** — Use the search bar to find users by name, email, or ID.
- **Filters & Columns** — Use filters to narrow down results and select which columns to display.
- **Add Domains** — Click on Add Domain to create a new domain.

**Steps to Create a New Domain**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Domains tab | Open the Domains section from the Governance group in the left navigation sidebar. |
| 2 | Click on the (+) Add button to create a new Domain | Click the + Add button at the top of the domain list to open the domain creation form. |
| 3 | Enter the Required Details | Fill in the domain Name (required), Display Name, and a Description to explain the domain's purpose. |
| 4 | Configure Visual Identity | Set an icon URL to represent the domain visually, and choose a Color that will appear as a visual indicator throughout the UI. |
| 5 | Add Tags & Glossary Terms | Optionally attach Tags and Glossary Terms to the domain to group related governance metadata under a unified structure. |
| 6 | Click Save | Confirm the domain creation. The new domain will appear in the list immediately. |

Followed by a **Managing Domains** section.

## 3.12 Projects (Admin)

`/docs/projects/` — *The Projects module allows users to organize and manage data assets within a
structured workspace, providing a centralized view for assets, relationships, governance settings,
and team members.*

**Project Overview** — the Overview tab displays a summary of the project, including key details
and high-level information.

| Field | Meaning |
|---|---|
| Name & Status | Project name with current status (e.g., Draft). |
| Domain | The governance domain the project belongs to. |
| Owner | The primary owner responsible for the project. |
| Assets Count | Total number of data assets linked to the project. |
| Relationships Count | Number of defined relationships between assets. |
| Members Count | Number of users assigned to this project. |
| Tags & Terms | Tags and glossary terms associated with the project. |
| Description | A written summary explaining the project's purpose. |

**Assets** — the Assets tab displays all data assets linked to the project, along with a visual
map of their relationships.
- **Asset List** — View all linked assets (e.g., tables) with their Name, Type, and Classification displayed in a structured list.
- **Comments & Files** — Add comments to assets and upload supporting files or attach new assets directly from the list.
- **Asset Actions** — Perform actions on individual assets such as deleting them from the project.
- **Asset Map** — The Map tab provides a visual representation of assets and their relationships. View assets as nodes, visualize connections between them, and add new relationships directly on the canvas.

**Governance** — the Governance tab allows users to define classification rules and governance
standards for the project.
- **Certification Level** — Set a quality certification level such as Gold to indicate data trustworthiness.
- **PII Classification** — Classify the data sensitivity level (e.g., Non-Sensitive) for privacy compliance.
- **Intended Use** — Define the purpose of the project's data (e.g., Analytics, Reporting).
- **Save Governance Settings** — Assign classifications to assets and save governance standards across the project.

**Members** — the Members tab displays and manages users assigned to the project.
- **Member List** — View all assigned members with their Name, Role (Admin / Viewer), and the date they were added to the project.
- **Add Members** — Add new users to the project and assign them a role (Admin or Viewer).
- **Edit or Remove Members** — Update a member's role or remove them from the project at any time.

> The Activity & Audit Panel tracks all actions within the project — including project updates,
> governance changes, and asset additions or removals — giving you a full audit trail of every change.

**Project Actions** — use the action buttons to control the lifecycle state of a project.
- **Save as Draft** — Save the project without publishing. Draft projects are not fully visible to all users.
- **Publish** — Make the project active and available across the platform for all assigned members.

**Notes**
- Draft projects are not fully visible to all users. Permissions depend on user roles, and governance settings impact asset accessibility.
- Relationships between assets must be defined manually in the Map tab. You can also transfer the project to another owner at any time.

---

# 4. User documentation

## 4.1 Datasets

`/docs/user/datasets/` — *This section displays all data assets that you have access to. If you do
not have access to any data assets, you can request access as follows:*

**Steps to access to any data assets**

| # | Step | Detail |
|---|---|---|
| 1 | Request a New Dataset | Click on "New Request" to start a dataset request. |
| 2 | Fill Required Details | Provide Basic Info, Data & Metadata, PII & Security, and External Sharing. |
| 3 | Submit and Track Request | Track your request from the Access Requests tab. |
| 4 | Request Existing Data | After submission, you can track and review your request through the Access Requests tab. |
| 5 | Additional Actions | If you would like to request access to existing datasets, you can browse available data assets in the Data Assets tab and submit an access request directly from there. |

**Additional Information**
When selecting and viewing an existing data asset, you can request to create a dashboard by
clicking on Request to Create Dashboard. If you do not have the required professional license,
you must first submit a request to obtain the license in order to proceed with creating the dashboard.

## 4.2 Dashboard

`/docs/user/dashboard/` — *Interactive dashboard to track, visualize, and analyze your data assets and daily operations.*

**Intro:** The Dashboards tab displays all dashboards that you have access to. If you don't have
access to any data assets, you can submit a request for a new dashboard or request access to existing ones.

**Steps to access to any Dashboards**

| # | Step | Detail |
|---|---|---|
| 1 | Request a New Dashboard | From the Dashboards tab, click Request New Dashboard to begin the access request process. |
| 2 | Fill Required Details | Enter the dashboard name, owner, and a brief description of what data it should display. |
| 3 | Submit and Track Request | Track your request from the Access Requests tab. |
| 4 | Request Existing Dashboards | Define whether the dashboard can be shared externally and with whom, directly. |

**Supporting panels**
- **Track in Access Requests** — After submission, monitor your request status in the Access Requests tab.
- **Browse Data Assets** — To request access to an existing dashboard, navigate to the Data Assets tab and browse available assets. Once you find the dashboard, click Request Access to submit your request directly from there.
- **Viewing Dashboard Details** — Click View on any existing dashboard to see its description, tags, and service type (e.g., Qlik or Power BI).
- **Open in BI Tool** — Depending on the dashboard's service type, you can open it directly in the corresponding BI platform.

> After submission, your dashboard request follows the same approval workflow as dataset requests.
> You can track every status change via the Access Requests tab.
> **Tip:** Check Data Assets tab first — the dashboard may already exist.

## 4.3 Form builder

`/docs/user/form-builder/` — *Create structured forms for manual data entry or import from Excel.*

**Intro:** The Form Builder tab allows you to create structured forms where data can be entered
manually or imported from an Excel file. Forms can be shared within spaces and used to generate dashboards.

**Steps to create a form**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Forms builder | Open the Forms Builder tab from the left navigation menu. |
| 2 | Create a New Form | Click Create Form and fill in the required Name and Description, then click Create. |
| 3 | Open your Form | Click Open Form. A pop-up appears with available options: import data or create a dashboard. |
| 4 | Build Your Form | Add columns, insert rows, set data types, import an Excel file, or create a dashboard from your data. |

**Additional information**
To edit or delete a form, select the desired form and click the three-dot (…) menu.
Forms added to a Space become accessible to all space members. Any dashboard created from a form
will reflect live data.

## 4.4 Team & Spaces

`/docs/user/team-spaces/` — *This tab allows users to create and manage teams, and spaces for collaboration among members.*

**Intro:** It enables users to share information, access resources, create dashboards, communicate,
and work together effectively as a team.

**Steps to Create a Team and Space**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Teams & Spaces | Click on the Teams tab from the sidebar to access your team workspace. |
| 2 | Enter Details | Enter the required details (Name and Description). |
| 3 | Click on Open Team | A pop-up will appear. Within the team, you can create spaces, add members, share assets, and communicate effectively. |
| 4 | Create New Space | Enter the required details (Space Name and Description). Add members and select assets such as Forms, Dashboards, Planners, or Data Assets. |

**Further sections:** Space Management · Adding a Planner & Managing Tasks

> Spaces within the same team can each have their own members, assets, and planners — allowing
> fine-grained access control and collaboration scoping per project.

## 4.5 Access Requests (User)

`/docs/user/access-requests/` — *Users can request access to datasets, dashboards, and additional privileges.*

**Intro:** Users can request access when:
- A dataset is published but not assigned to them
- A dashboard exists but requires permission
- They need additional privileges (e.g., Add to Space, licenses)

**Submitted Requests** — when navigating to the My Requests tab, all requests submitted by you
will be displayed.

**Cancelling a Request** — you can cancel your request before it is approved by the admin. Once
approved, the request cannot be cancelled from your end and will require admin action.

> The audit log in the View Details panel records every status transition — who acted on the
> request, what action was taken, and when — giving you full transparency over your request lifecycle.

## 4.6 Data Assets (User)

`/docs/user/data-assets/` — *In this tab, all published data assets are displayed, including those
from Databases, Pipelines, Dashboards and Metadata.*

**Intro:** Each asset includes details such as the creator, publisher, and the number of rows and
columns. You can also filter, select a specific service type, or search for a particular asset.

**Steps to Request Access to a Data Asset**

| # | Step | Detail |
|---|---|---|
| 1 | Navigate to the Data Assets tab. | Tab on the Teams. |
| 2 | Select the data asset you want to access. | nter the required details (Name and Description). |
| 3 | Click on Request Access. | A pop-up will appear with the following message. Within the team, you can create spaces, add members, share assets, and communicate effectively. |
| 4 | Create New Space | Choose the access type (Add to Space or Read), set the priority, and provide a description. |
| 4 | Confirm. | Choose the access type (Add to Space or Read), set the priority, and provide a description. |

> ⚠️ **Content quality note:** step descriptions on this page are mismatched — copy from
> Team & Spaces has been pasted in, step 2 begins mid-word ("nter"), and step 4 is duplicated.

## 4.7 Planner & Tasks

`/docs/user/planner-tasks/` — *Manage your personal tasks and tasks assigned within teams and spaces.*

**Overview:** There are two main sections.

**Steps to Create a Planner (My Planner)**

| # | Step | Detail |
|---|---|---|
| 1 | Go to the Planner & Tasks tab | Navigate to the Planning & Tasks section from the left sidebar. |
| 2 | Select the My Planner page. | Choose the My Planner page to manage your personal planners and tasks. |
| 3 | Click on Add Planner. | — |
| 4 | Enter the Planner Details | Fill in the planner Name and Description, then confirm to create it. |
| 5 | Open the created planner. | Click on the newly created planner to open it and start adding tasks. |
| 6 | Click on Create New Task. | — |
| 7 | Fill in the task details | Provide the task Name, Start Date, End Date, Priority, and Progress. |
| 8 | Click Save. | Save the task to add it to your planner. It will appear in the task list. |

**Steps for Team & Space Planner**

| # | Step | Detail |
|---|---|---|
| 1 | Go to the Planning & Tasks tab | Navigate to the Planning & Tasks section from the left sidebar. |
| 2 | Select the Team & Space Planner page. | Switch to the Team & Space Planner page to view team-assigned planners. |
| 3 | All planners that include tasks assigned to you will be displayed. | All planners that include tasks assigned to you will be displayed here. |
| 4 | Enter the planner details (Name and Description). | Select a planner from the list to see all tasks assigned to you inside it. |
| 5 | Open the created planner. | Review the task details and update the progress status as needed. |

## 4.8 Projects (User)

`/docs/user/projects/` — *The Viewer role provides read-only access to project content. Users with
this role can explore project data and stay updated without making any modifications.*

**Heading:** Viewer (Read-Only) User Access

**Viewer Permissions — Viewer users can:**
- View all project tabs — Overview, Assets, Map, Governance, Members
- View asset details, including: Metadata · Tags, Terms, and Classification · Relationships (Map)
- View governance settings and classifications
- Track updates through Activity & Audit
- Add comments on the project

**Viewer users cannot:**
- Create or edit assets
- Add or modify metadata (tags, terms, descriptions)
- Publish or delete assets
- Manage access or permissions
- Add or remove members
- Modify governance settings
- Create relationships in the Map
- Upload files

**Notes**
- All modification actions are restricted to authorized roles (e.g., Admin).
- Comments support collaboration without affecting data integrity.

---

# 5. Recurring UI text

Text that appears on every documentation page, translated per language.

| Element | English | Arabic |
|---|---|---|
| Nav group | Overview | نظرة عامة |
| Nav group | As Admin role | كمسؤول |
| Nav group | As User role | كمستخدم |
| Sidebar card title | Need help? | تحتاج مساعدة؟ |
| Sidebar card body | Find guides and tutorials to make the most of BayanatiHub. | — |
| Sidebar card link | View Help Center | — |
| Search placeholder | Search documentation… | — |
| TOC heading | On this page | — |
| Pagination | Previous / Next | السابق / التالي |
| Overview headings | Introduction · As Admin role · As User role | — |

**Breadcrumbs** on guide pages follow the pattern: Docs → As Admin role / As user role → *Page title*
(with a fourth level for the three Users sub-pages).

**Recurring callout titles:** Additional Information · Important · Note · Notes

---

# 6. Arabic content

All 26 English documentation pages have a complete Arabic translation under `/ar/docs/`
(`ar/` mirrors the English folder structure exactly). Page titles:

| English | العربية |
|---|---|
| Introduction | مقدمة |
| Access Requests | طلبات الوصول |
| Data Assets | أصول البيانات |
| Assets Connector | موصل الأصول |
| Classifications | التصنيفات |
| Glossary | المسرد |
| Lists | القوائم |
| Identity Providers | موفرو الهوية |
| Analytics Engine | محرك التحليلات |
| Theme Settings | إعدادات المظهر |
| Users | المستخدمون |
| Users Section | قسم المستخدمين |
| Roles Section | قسم الأدوار |
| Policies Section | قسم السياسات |
| Domains | النطاقات |
| Projects | المشاريع |
| Datasets | مجموعات البيانات |
| Dashboard | لوحة التحكم |
| Form builder | منشئ النماذج |
| Team & Spaces | الفريق والمساحات |
| Planner & Tasks | المخطط والمهام |

The homepage is **English only** — there is no Arabic marketing page.

---

# 7. Placeholder content still live

These pages are published but are leftover template material, not BayanatiHub documentation.
They are not linked from the sidebar but are reachable by URL and appear in search.

| Page | Route | Content |
|---|---|---|
| Getting started | `/docs/getting-started/` · `/ar/docs/getting-started/` | Instructions for installing the Astro template — "Clone the repo and install dependencies", "The site runs on `http://localhost:4321`". |
| Guide — first example | `/docs/guide-one/` · `/ar/docs/guide-one/` | "This is a placeholder guide. Use it to check spacing, prose styles, and navigation behaviour while you build your own content." |
| Guide — second example | `/docs/guide-two/` | "Lorem ipsum dolor sit amet…" — demonstrates headings and inline code. English only. |
| Example page | `/example-page/` | Privacy-policy layout demo. |
| Blog | `/blog/` and `/blog/hello-world/` | One placeholder post authored by "Your Brand". |

Also placeholder: the site-wide meta description still reads *"An Astro template for product and
documentation sites. Replace this description in src/site.config.ts."*
