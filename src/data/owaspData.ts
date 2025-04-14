
import { RiskCategory } from "../types/owasp";

export const owaspTop10: RiskCategory[] = [
  {
    id: "A01:2021",
    rank: 1,
    name: "Broken Access Control",
    description: "Access control enforces policy such that users cannot act outside of their intended permissions. Failures typically lead to unauthorized information disclosure, modification, or destruction of all data or performing a business function outside the user's limits.",
    icon: "shield-off",
    severity: "Critical",
    vulnerabilities: [
      {
        id: "A01-1",
        name: "Violation of the principle of least privilege",
        description: "Users are granted permissions beyond what they need to perform their tasks.",
        impact: "Attackers can access unauthorized functionality or data.",
        mitigation: "Implement least privilege access controls, deny by default.",
        severity: "High"
      },
      {
        id: "A01-2",
        name: "Bypassing access control checks",
        description: "Modifying the URL, internal application state, or HTML page to bypass access controls.",
        impact: "Unauthorized access to sensitive data or admin functions.",
        mitigation: "Server-side validation of all access control checks.",
        severity: "Critical"
      },
      {
        id: "A01-3",
        name: "CORS misconfiguration",
        description: "Improper Cross-Origin Resource Sharing (CORS) allowing unauthorized API access.",
        impact: "Malicious sites can access API data from user's browser session.",
        mitigation: "Use appropriate CORS headers and validate origin domains.",
        severity: "Medium"
      }
    ],
    cwe: ["CWE-284", "CWE-285", "CWE-639"]
  },
  {
    id: "A02:2021",
    rank: 2,
    name: "Cryptographic Failures",
    description: "Failures related to cryptography (or lack thereof) that often lead to exposure of sensitive data. This includes failures to encrypt data in transit, use of weak cryptographic algorithms, and poor key management.",
    icon: "key-off",
    severity: "Critical",
    vulnerabilities: [
      {
        id: "A02-1",
        name: "Sensitive data transmitted in clear text",
        description: "Data transmitted over networks without encryption.",
        impact: "Sensitive information exposed to anyone who can intercept network traffic.",
        mitigation: "Use TLS for all connections, implement HSTS.",
        severity: "Critical"
      },
      {
        id: "A02-2",
        name: "Weak cryptographic algorithms",
        description: "Using deprecated or weak algorithms like MD5, SHA1, or insecure cipher modes.",
        impact: "Protected data can be compromised through known attacks.",
        mitigation: "Use strong, modern encryption standards and algorithms.",
        severity: "High"
      },
      {
        id: "A02-3",
        name: "Inadequate key management",
        description: "Poor practices for generating, distributing, or storing cryptographic keys.",
        impact: "Compromised keys can lead to decryption of protected data.",
        mitigation: "Implement proper key management lifecycle and rotation.",
        severity: "High"
      }
    ],
    cwe: ["CWE-310", "CWE-327", "CWE-759"]
  },
  {
    id: "A03:2021",
    rank: 3,
    name: "Injection",
    description: "Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent to an interpreter as part of a command or query. The attacker's hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.",
    icon: "code",
    severity: "Critical",
    vulnerabilities: [
      {
        id: "A03-1",
        name: "SQL Injection",
        description: "User-supplied data not properly validated, allowing SQL commands to be executed.",
        impact: "Data theft, deletion, or manipulation; unauthorized access.",
        mitigation: "Use parameterized queries or prepared statements, ORMs, and input validation.",
        severity: "Critical"
      },
      {
        id: "A03-2",
        name: "NoSQL Injection",
        description: "Similar to SQL injection but targeting NoSQL databases.",
        impact: "Data exposure, modification, or deletion.",
        mitigation: "Sanitize inputs, use parameterization, and database-specific escaping.",
        severity: "High"
      },
      {
        id: "A03-3",
        name: "OS Command Injection",
        description: "Application passing unsafe user-supplied data to system shell.",
        impact: "Execution of arbitrary commands on the host operating system.",
        mitigation: "Avoid calling OS commands directly. Use APIs instead of shell commands.",
        severity: "Critical"
      }
    ],
    cwe: ["CWE-77", "CWE-89", "CWE-564"]
  },
  {
    id: "A04:2021",
    rank: 4,
    name: "Insecure Design",
    description: "Insecure design refers to risks stemming from design and architectural flaws. It emphasizes the need for secure design patterns, threat modeling, and reference architectures.",
    icon: "file-warning",
    severity: "High",
    vulnerabilities: [
      {
        id: "A04-1",
        name: "Missing security controls",
        description: "Failing to design appropriate security controls for the threat model.",
        impact: "Systematic vulnerability across multiple areas of the application.",
        mitigation: "Implement threat modeling during design phases.",
        severity: "High"
      },
      {
        id: "A04-2",
        name: "Business logic flaws",
        description: "Flaws in the design of application business logic that allow abuse.",
        impact: "Exploitation of legitimate functionality for malicious purposes.",
        mitigation: "Design for security with proper validation of business processes.",
        severity: "Medium"
      },
      {
        id: "A04-3",
        name: "Insufficient security requirements",
        description: "Security requirements not adequately defined during planning.",
        impact: "Security considered as an afterthought, leading to systemic weaknesses.",
        mitigation: "Integrate security requirements into initial design phases.",
        severity: "High"
      }
    ],
    cwe: ["CWE-637", "CWE-749", "CWE-1173"]
  },
  {
    id: "A05:2021",
    rank: 5,
    name: "Security Misconfiguration",
    description: "Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers, and verbose error messages containing sensitive information.",
    icon: "settings",
    severity: "High",
    vulnerabilities: [
      {
        id: "A05-1",
        name: "Unnecessary features enabled",
        description: "Unneeded features, services or pages are enabled in production.",
        impact: "Increased attack surface with potential vulnerabilities.",
        mitigation: "Implement a minimal platform with only necessary features.",
        severity: "Medium"
      },
      {
        id: "A05-2",
        name: "Default configurations unchanged",
        description: "Using software with default security settings, accounts, or passwords.",
        impact: "Known default configurations can be exploited by attackers.",
        mitigation: "Implement secure configuration standards for all platforms.",
        severity: "High"
      },
      {
        id: "A05-3",
        name: "Error handling revealing sensitive data",
        description: "Stack traces or detailed errors exposed to users.",
        impact: "Technical information exposed may help attackers exploit other vulnerabilities.",
        mitigation: "Implement custom error pages and proper exception handling.",
        severity: "Medium"
      }
    ],
    cwe: ["CWE-2", "CWE-16", "CWE-209"]
  },
  {
    id: "A06:2021",
    rank: 6,
    name: "Vulnerable & Outdated Components",
    description: "Components, such as libraries, frameworks, and other software modules, run with the same privileges as the application. If a vulnerable component is exploited, such an attack can facilitate serious data loss or server takeover.",
    icon: "package-x",
    severity: "High",
    vulnerabilities: [
      {
        id: "A06-1",
        name: "Using components with known vulnerabilities",
        description: "Utilizing libraries or components with published security flaws.",
        impact: "Exploitation of known vulnerabilities to compromise the application.",
        mitigation: "Implement a patch management process and regular vulnerability scanning.",
        severity: "High"
      },
      {
        id: "A06-2",
        name: "Unsupported or outdated software",
        description: "Using components that are no longer maintained.",
        impact: "Vulnerabilities will never be patched, leading to perpetual risk.",
        mitigation: "Maintain an inventory of all components and their versions.",
        severity: "High"
      },
      {
        id: "A06-3",
        name: "Not scanning for vulnerabilities regularly",
        description: "Lack of regular security testing or vulnerability scanning.",
        impact: "Vulnerabilities remain undiscovered until exploited.",
        mitigation: "Implement automated dependency scanning in the build pipeline.",
        severity: "Medium"
      }
    ],
    cwe: ["CWE-1104", "CWE-829", "CWE-937"]
  },
  {
    id: "A07:2021",
    rank: 7,
    name: "Identification & Authentication Failures",
    description: "Application functions related to authentication and session management are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit other implementation flaws to assume other users' identities temporarily or permanently.",
    icon: "user-x",
    severity: "High",
    vulnerabilities: [
      {
        id: "A07-1",
        name: "Weak password policies",
        description: "Allowing easily guessable passwords or storing passwords insecurely.",
        impact: "Credential compromise through brute force or password cracking.",
        mitigation: "Implement strong password policies and proper password hashing.",
        severity: "High"
      },
      {
        id: "A07-2",
        name: "Weak session management",
        description: "Poorly implemented session tokens that can be stolen or forged.",
        impact: "Session hijacking and unauthorized account access.",
        mitigation: "Use secure, random session IDs and proper cookie attributes.",
        severity: "High"
      },
      {
        id: "A07-3",
        name: "Missing multi-factor authentication",
        description: "Lack of MFA for sensitive functions or high-privilege accounts.",
        impact: "Single factor authentication can be more easily compromised.",
        mitigation: "Implement MFA for critical functions and administrative access.",
        severity: "Medium"
      }
    ],
    cwe: ["CWE-287", "CWE-384", "CWE-522"]
  },
  {
    id: "A08:2021",
    rank: 8,
    name: "Software & Data Integrity Failures",
    description: "Software and data integrity failures relate to code and infrastructure that does not protect against integrity violations. This can include using plugins from untrusted sources, insecure CI/CD pipelines, and unsigned data.",
    icon: "file-x",
    severity: "Medium",
    vulnerabilities: [
      {
        id: "A08-1",
        name: "Unsigned code or data",
        description: "Using or executing code without validating its integrity.",
        impact: "Malicious code can be executed if integrity is compromised.",
        mitigation: "Implement digital signatures and integrity verification.",
        severity: "High"
      },
      {
        id: "A08-2",
        name: "Insecure deserialization",
        description: "Processing untrusted data without validation during deserialization.",
        impact: "Remote code execution or data manipulation.",
        mitigation: "Implement integrity checks and avoid deserializing from untrusted sources.",
        severity: "Critical"
      },
      {
        id: "A08-3",
        name: "Insecure CI/CD pipeline",
        description: "Vulnerable build or deployment pipelines that can be manipulated.",
        impact: "Supply chain attacks that compromise the entire application.",
        mitigation: "Secure build environments and implement proper access controls.",
        severity: "Medium"
      }
    ],
    cwe: ["CWE-494", "CWE-502", "CWE-829"]
  },
  {
    id: "A09:2021",
    rank: 9,
    name: "Security Logging & Monitoring Failures",
    description: "This category is to help detect, escalate, and respond to active breaches. Without logging and monitoring, breaches cannot be detected. Insufficient logging, detection, monitoring, and active response occurs any time.",
    icon: "eye-off",
    severity: "Medium",
    vulnerabilities: [
      {
        id: "A09-1",
        name: "Insufficient logging",
        description: "Security-relevant events not being logged or logs not detailed enough.",
        impact: "Inability to detect or investigate security incidents.",
        mitigation: "Implement comprehensive logging of security-relevant events.",
        severity: "Medium"
      },
      {
        id: "A09-2",
        name: "Ineffective monitoring",
        description: "Logs generated but not actively monitored for suspicious activity.",
        impact: "Delayed or missed detection of security breaches.",
        mitigation: "Implement real-time monitoring and alerting systems.",
        severity: "Medium"
      },
      {
        id: "A09-3",
        name: "Inadequate incident response",
        description: "No or ineffective processes for responding to detected security events.",
        impact: "Prolonged attacker access due to slow response.",
        mitigation: "Establish an incident response plan and conduct regular drills.",
        severity: "Medium"
      }
    ],
    cwe: ["CWE-223", "CWE-778", "CWE-779"]
  },
  {
    id: "A10:2021",
    rank: 10,
    name: "Server-Side Request Forgery (SSRF)",
    description: "SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL. It allows an attacker to coerce the application to send a crafted request to an unexpected destination, even when protected by a firewall, VPN, or another type of network access control list (ACL).",
    icon: "server",
    severity: "Medium",
    vulnerabilities: [
      {
        id: "A10-1",
        name: "Basic SSRF against the server",
        description: "Application fetches resources based on user input without proper validation.",
        impact: "Internal services can be probed or exploited by attackers.",
        mitigation: "Implement allow-list validation for URLs and hosts.",
        severity: "High"
      },
      {
        id: "A10-2",
        name: "SSRF through cloud services",
        description: "SSRF attacks targeting cloud service provider metadata endpoints.",
        impact: "Exposure of cloud credentials and sensitive configuration data.",
        mitigation: "Block access to cloud metadata endpoints in application frameworks.",
        severity: "High"
      },
      {
        id: "A10-3",
        name: "Blind SSRF vulnerabilities",
        description: "SSRF where the attacker doesn't see the response but can infer success.",
        impact: "Ability to probe internal networks and potentially exploit vulnerabilities.",
        mitigation: "Implement network segmentation and proper access controls.",
        severity: "Medium"
      }
    ],
    cwe: ["CWE-918"]
  }
];
