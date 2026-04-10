"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { MOCK_DEVICES, MOCK_ALERTS, MOCK_STATS } from "@/lib/data";
import Card, { CardHeader, CardBody } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  ShieldIcon,
  NetworkIcon,
  ServerIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  ChartIcon,
  UserIcon,
  LogOutIcon,
  ZapIcon,
} from "@/components/ui/Icons";

const DEVICE_ICONS: Record<string, React.ReactNode> = {
  router: <NetworkIcon className="text-cyan-400" size={18} />,
  switch: <NetworkIcon className="text-blue-400" size={18} />,
  firewall: <ShieldIcon className="text-amber-400" size={18} />,
  server: <ServerIcon className="text-purple-400" size={18} />,
  endpoint: <NetworkIcon className="text-gray-400" size={18} />,
};

const STATUS_BADGE: Record<string, "success" | "warning" | "danger"> = {
  online: "success",
  warning: "warning",
  offline: "danger",
};

const ALERT_ICON: Record<string, React.ReactNode> = {
  critical: <AlertTriangleIcon className="text-red-400" size={18} />,
  warning: <AlertTriangleIcon className="text-amber-400" size={18} />,
  info: <CheckCircleIcon className="text-cyan-400" size={18} />,
};

export default function DashboardPage() {
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-cyan-400" />
          <p className="mt-4 text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  const unresolvedAlerts = MOCK_ALERTS.filter((a) => !a.resolved);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-950">
      {/* Dashboard Header */}
      <div className="border-b border-gray-800/50 bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Network Dashboard
              </h1>
              <p className="text-sm text-gray-400">
                Welcome back, {user.name} — {user.company}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                System Operational
              </Badge>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOutIcon size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            {
              label: "Total Devices",
              value: MOCK_STATS.totalDevices,
              icon: <NetworkIcon className="text-cyan-400" size={20} />,
            },
            {
              label: "Online",
              value: MOCK_STATS.onlineDevices,
              icon: <CheckCircleIcon className="text-emerald-400" size={20} />,
            },
            {
              label: "Active Alerts",
              value: MOCK_STATS.activeAlerts,
              icon: <AlertTriangleIcon className="text-amber-400" size={20} />,
            },
            {
              label: "Uptime",
              value: MOCK_STATS.networkUptime,
              icon: <ChartIcon className="text-blue-400" size={20} />,
            },
            {
              label: "Bandwidth",
              value: `${MOCK_STATS.bandwidthUsage}%`,
              icon: <ZapIcon className="text-purple-400" size={20} />,
            },
            {
              label: "Threats Blocked",
              value: MOCK_STATS.threatsBlocked.toLocaleString(),
              icon: <ShieldIcon className="text-red-400" size={20} />,
            },
          ].map((stat) => (
            <Card key={stat.label} className="p-4">
              <div className="flex items-center gap-3">
                {stat.icon}
                <div>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Network Devices */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">
                    Network Devices
                  </h2>
                  <Badge variant="info">
                    {MOCK_DEVICES.length} devices
                  </Badge>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700/50">
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400">
                          Device
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400">
                          IP Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400">
                          Uptime
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400">
                          Traffic
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                      {MOCK_DEVICES.map((device) => (
                        <tr
                          key={device.id}
                          className="hover:bg-gray-800/20 transition-colors"
                        >
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex items-center gap-3">
                              {DEVICE_ICONS[device.type]}
                              <div>
                                <p className="text-sm font-medium text-white">
                                  {device.name}
                                </p>
                                <p className="text-xs text-gray-500 capitalize">
                                  {device.type}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300 font-mono">
                            {device.ip}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Badge variant={STATUS_BADGE[device.status]}>
                              {device.status}
                            </Badge>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                            {device.uptime}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">
                            {device.traffic}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Alerts Panel */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">Alerts</h2>
                  <Badge variant="warning">
                    {unresolvedAlerts.length} active
                  </Badge>
                </div>
              </CardHeader>
              <CardBody className="space-y-4">
                {MOCK_ALERTS.map((alert) => (
                  <div
                    key={alert.id}
                    className={`flex gap-3 rounded-lg border p-3 ${
                      alert.resolved
                        ? "border-gray-800/50 bg-gray-900/30 opacity-60"
                        : alert.type === "critical"
                          ? "border-red-500/20 bg-red-500/5"
                          : alert.type === "warning"
                            ? "border-amber-500/20 bg-amber-500/5"
                            : "border-cyan-500/20 bg-cyan-500/5"
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {ALERT_ICON[alert.type]}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {alert.message}
                      </p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {new Date(alert.timestamp).toLocaleString()}
                        </span>
                        {alert.resolved && (
                          <Badge variant="success">Resolved</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>

            {/* User Account Info */}
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold text-white">Account</h2>
              </CardHeader>
              <CardBody className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    <UserIcon className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                </div>
                <div className="space-y-2 pt-2 border-t border-gray-800/50">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Company</span>
                    <span className="text-gray-200">{user.company}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Role</span>
                    <Badge variant="info" className="capitalize">
                      {user.role}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Plan</span>
                    <Badge variant="success">Enterprise</Badge>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
