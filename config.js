const repositories = process.env.RENOVATE_REPOSITORIES.split(",");
const gitAuthor =
  process.env.RENOVATE_GIT_AUTHOR || "Renovate Bot <renovate@localhost>";
module.exports = {
  platform: "github",
  token: process.env.RENOVATE_TOKEN,
  repositories,
  gitAuthor,
  onboarding: false,
  requireConfig: false,
  dryRun: false,
};
