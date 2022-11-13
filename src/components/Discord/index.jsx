import Discord from '../../assets/img/discord.svg';
import { DiscordContainer } from './style';

export function DiscordIcon() {
  return (
    <DiscordContainer>
      <a href="https://discord.com/invite/NtESsDFGx5">
        <img src={Discord} />
      </a>
    </DiscordContainer>
  );
}
