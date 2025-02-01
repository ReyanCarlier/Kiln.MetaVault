/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as VaultImport } from './routes/vault'
import { Route as EarnImport } from './routes/earn'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const VaultRoute = VaultImport.update({
  id: '/vault',
  path: '/vault',
  getParentRoute: () => rootRoute,
} as any)

const EarnRoute = EarnImport.update({
  id: '/earn',
  path: '/earn',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/earn': {
      id: '/earn'
      path: '/earn'
      fullPath: '/earn'
      preLoaderRoute: typeof EarnImport
      parentRoute: typeof rootRoute
    }
    '/vault': {
      id: '/vault'
      path: '/vault'
      fullPath: '/vault'
      preLoaderRoute: typeof VaultImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/earn': typeof EarnRoute
  '/vault': typeof VaultRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/earn': typeof EarnRoute
  '/vault': typeof VaultRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/earn': typeof EarnRoute
  '/vault': typeof VaultRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/earn' | '/vault'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/earn' | '/vault'
  id: '__root__' | '/' | '/earn' | '/vault'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  EarnRoute: typeof EarnRoute
  VaultRoute: typeof VaultRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  EarnRoute: EarnRoute,
  VaultRoute: VaultRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/earn",
        "/vault"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/earn": {
      "filePath": "earn.tsx"
    },
    "/vault": {
      "filePath": "vault.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
