# Keycloak Theme Playground

This repo contains a theme for Keycloak that is based on the [Keywind](https://github.com/lukin/keywind) theme.

It shows how you can customize it for your own needs.

## How to use

To use this Theme you need to build it first.

  pnpm install
  pnpm build:jar

This will create a `mighty-code.jar` file in the `out` directory.

Do the same for the Keywind Theme.

Then mount place/mount your jars to your Keycloak Instance and choose the theme in the admin panel under the realm settings.

There is also a `docker-compose.yml` file that you can use to start a Keycloak instance with the themes.

  docker-compose up -d

## Resources
- https://www.mastertheboss.com/keycloak/how-to-create-a-custom-keycloak-theme/
- https://www.baeldung.com/keycloak-custom-login-page
- https://github.com/lukin/keywind
