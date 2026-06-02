# Changelog

All notable changes to Hermes Damocles are documented here.

## v0.1.3 - 2026-05-04

### Changed

- Skill inventory now resolves the Hermes source root from the installed
  `hermes_cli` package instead of the Damocles plugin path, fixing source
  attribution when installed under `~/.hermes/plugins/hermes-damocles`.
- `/skills` now separates effective skills, expected shadowed overrides, true
  duplicates, and scan errors.
- User-over-bundled skill overrides are reported as `shadowed` instead of
  noisy `duplicates`.

### Added

- Regression coverage for user-over-bundled shadowing, same-root duplicates,
  optional skills, external skills, and disabled skill inventory.

## v0.1.2 - 2026-05-04

### Changed

- Damocles now turns HTML/SPA fallback API responses into an actionable
  backend-not-mounted diagnostic instead of surfacing raw JSON parser errors.
- Install docs now clarify that dashboard rescans refresh frontend discovery,
  while Python plugin API routes require a full dashboard restart.

### Added

- Regression coverage for plugin API fallback diagnostics.

## v0.1.1 - 2026-05-04

### Changed

- Redaction now fails closed with `[redaction unavailable]` if Hermes core
  redaction cannot be loaded or raises an error.
- Journey summaries and root prompts now use the same redaction path as
  crossing previews and reports.
- Security and install docs now include Docker PoC, pinned-version, rollback,
  and redaction smoke-test guidance.

### Added

- Regression coverage for redaction import failures, redactor exceptions, and
  journey metadata redaction.

## v0.1.0 - 2026-04-29

First public hackathon release.

### Added

- Read-only Hermes dashboard plugin manifest and API.
- Journey index for CLI, dashboard, gateway, cron, and delegated sessions.
- Damocles map with thread, corridor, and flight-strip modes.
- Crossing inspector with previews, status, evidence, and guideposts.
- Skill atlas, cron gate, model ferry, memory/context view, and report view.
- Static GitHub Pages demo with mocked Hermes state.
- Reproducible frontend build from `src/` to `dashboard/dist/`.
- Content-hash asset stamping for the public demo.
- Browser smoke suite for the public demo and main controls.
- API normalization fixture tests.

### Notes

- The plugin is read-only and does not mutate Hermes state.
- The public demo uses mocked state; installed plugin data comes from local
  Hermes state.
- Full Hermes dashboard integration tests remain future work.
