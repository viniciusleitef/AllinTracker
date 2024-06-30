from database import Base
from sqlalchemy import ForeignKey, Integer, String, Float, Date
from sqlalchemy.orm import relationship, mapped_column, Mapped, DeclarativeBase


class Rooms(Base):
    __tablename__='rooms'
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String, unique=True, nullable=False)
    type: Mapped[str] = mapped_column(String, unique=False, nullable=False)
    description: Mapped[str] = mapped_column(String, unique=False, nullable=True)

    ranking = relationship("Ranking", back_populates="rooms", uselist=False)
    players = relationship("Players", back_populates="rooms")

class Ranking(Base):
    __tablename__='ranking'
    
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    roomId: Mapped[int] = mapped_column(ForeignKey("rooms.id"), nullable=False)
    playerId: Mapped[int] = mapped_column(ForeignKey("players.id"), nullable=False)
    profit: Mapped[float] = mapped_column(Float, nullable=False)
    games_played: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    games_won: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    games_lost: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    games_drawn: Mapped[int] = mapped_column(Integer, nullable=False, default=0)

    room = relationship("Rooms", back_populates="ranking")

class Player(Base):
    __tablename__='players'

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    roomId: Mapped[int] = mapped_column(ForeignKey("rooms.id"), nullable=False)
    name: Mapped[str] = mapped_column(String, unique=True, nullable=False)

    room = relationship("Rooms", back_populates="players")

class Games(Base):
    __tablename__='games'

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    roomId: Mapped[int] = mapped_column(ForeignKey("rooms.id"), nullable=False)
    buyIn: Mapped[int] = mapped_column(Integer, nullable=False)
    date_creation: Mapped[str] = mapped_column(Date)
    location: Mapped[str] = mapped_column(String, nullable=False)
    duration: Mapped[str] = mapped_column(String, nullable=False)
    game_type: Mapped[str] = mapped_column(String, nullable=True)
    qnt_buyIn: Mapped[int] = mapped_column(Integer, nullable=False)
    qnt_rebuys: Mapped[int] = mapped_column(Integer, nullable=False)
    qnt_players: Mapped[int] = mapped_column(Integer, nullable=False)
    total_money: Mapped[float] = mapped_column(Float, nullable=False)

    room = relationship("Rooms", back_populates="games")

class Game_ranking(Base):
    __tablename__='game_ranking'

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    gameId: Mapped[int] = mapped_column(ForeignKey("games.id"), nullable=False)
    playerId: Mapped[int] = mapped_column(ForeignKey("players.id"), nullable=False)
    profit: Mapped[float] = mapped_column(Float, nullable=False)
    qnt_rebuys: Mapped[int] = mapped_column(Integer, nullable=False)

    game = relationship("Games", back_populates="game_ranking")
    player = relationship("Player", back_populates="game_ranking")