import type { User } from "@/types";

// In-memory mock user store (replaced with DB in production)
const MOCK_USERS: Array<{ email: string; password: string; user: User }> = [
  {
    email: "admin@vertex.com",
    password: "Admin123!",
    user: {
      id: "usr_001",
      email: "admin@vertex.com",
      name: "Alex Thompson",
      company: "Vertex Network Solutions",
      role: "admin",
    },
  },
  {
    email: "demo@vertex.com",
    password: "Demo1234",
    user: {
      id: "usr_002",
      email: "demo@vertex.com",
      name: "Demo User",
      company: "Acme Corp",
      role: "user",
    },
  },
];

const registeredUsers: Array<{ email: string; password: string; user: User }> =
  [...MOCK_USERS];

export function authenticateUser(
  email: string,
  password: string
): User | null {
  const found = registeredUsers.find(
    (u) => u.email === email && u.password === password
  );
  return found ? found.user : null;
}

export function registerUser(
  email: string,
  password: string,
  name: string,
  company: string
): User | null {
  if (registeredUsers.some((u) => u.email === email)) {
    return null;
  }

  const newUser: User = {
    id: `usr_${Date.now()}`,
    email,
    name,
    company,
    role: "user",
  };

  registeredUsers.push({ email, password, user: newUser });
  return newUser;
}

/**
 * Encodes session data as a base64 token.
 * In production, replace with JWT or a secure session library.
 */
export function createSessionToken(user: User): string {
  const payload = {
    userId: user.id,
    email: user.email,
    name: user.name,
    company: user.company,
    role: user.role,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24h expiry
  };
  return Buffer.from(JSON.stringify(payload)).toString("base64");
}

export function verifySessionToken(token: string): User | null {
  try {
    const payload = JSON.parse(Buffer.from(token, "base64").toString("utf-8"));
    if (payload.exp < Date.now()) return null;
    return {
      id: payload.userId,
      email: payload.email,
      name: payload.name,
      company: payload.company,
      role: payload.role,
    };
  } catch {
    return null;
  }
}
