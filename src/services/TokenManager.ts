import jwt_decode from 'jwt-decode';

interface DecodedToken {
  exp: number;
  user_id: string;
}

class TokenManager {
  private token: string | null;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  getUserId(): string | null {
    const decodedToken = this.token ? (jwt_decode(this.token) as DecodedToken) : null;
    return decodedToken?.user_id || null;
  }

  isTokenExpired(): boolean {
    if (!this.token) {
      return true;
    }

    const decodedToken = jwt_decode(this.token) as DecodedToken;
    const expirationTimestamp = decodedToken.exp * 1000;
    return new Date().getTime() > expirationTimestamp;
  }
}

export default TokenManager;
