export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      Analytics: {
        Row: {
          created_at: string
          eventData: string | null
          eventName: string | null
          id: number
          option: string | null
        }
        Insert: {
          created_at?: string
          eventData?: string | null
          eventName?: string | null
          id?: number
          option?: string | null
        }
        Update: {
          created_at?: string
          eventData?: string | null
          eventName?: string | null
          id?: number
          option?: string | null
        }
        Relationships: []
      }
      ApplyRoom: {
        Row: {
          about: string | null
          applyType: string
          blackCurtain: boolean | null
          check: string
          createdAt: string
          date: string | null
          deskType: string | null
          follow: boolean | null
          food: string | null
          groupId: string | null
          id: number
          lowerSeatCount: number | null
          place: string | null
          presentation: string[] | null
          regularActivity: boolean | null
          request: string | null
          roomCount: number | null
          rule: boolean | null
          sound: boolean | null
          sponsor: string | null
          subSecond: boolean | null
          type: string | null
          updatedAt: string
          upperSeatCount: number | null
          waitingRoom: boolean | null
          winning: Database["public"]["Enums"]["Winning"]
        }
        Insert: {
          about?: string | null
          applyType: string
          blackCurtain?: boolean | null
          check?: string
          createdAt?: string
          date?: string | null
          deskType?: string | null
          follow?: boolean | null
          food?: string | null
          groupId?: string | null
          id?: number
          lowerSeatCount?: number | null
          place?: string | null
          presentation?: string[] | null
          regularActivity?: boolean | null
          request?: string | null
          roomCount?: number | null
          rule?: boolean | null
          sound?: boolean | null
          sponsor?: string | null
          subSecond?: boolean | null
          type?: string | null
          updatedAt?: string
          upperSeatCount?: number | null
          waitingRoom?: boolean | null
          winning?: Database["public"]["Enums"]["Winning"]
        }
        Update: {
          about?: string | null
          applyType?: string
          blackCurtain?: boolean | null
          check?: string
          createdAt?: string
          date?: string | null
          deskType?: string | null
          follow?: boolean | null
          food?: string | null
          groupId?: string | null
          id?: number
          lowerSeatCount?: number | null
          place?: string | null
          presentation?: string[] | null
          regularActivity?: boolean | null
          request?: string | null
          roomCount?: number | null
          rule?: boolean | null
          sound?: boolean | null
          sponsor?: string | null
          subSecond?: boolean | null
          type?: string | null
          updatedAt?: string
          upperSeatCount?: number | null
          waitingRoom?: boolean | null
          winning?: Database["public"]["Enums"]["Winning"]
        }
        Relationships: [
          {
            foreignKeyName: "ApplyRoom_groupId_fkey"
            columns: ["groupId"]
            isOneToOne: false
            referencedRelation: "Group"
            referencedColumns: ["id"]
          },
        ]
      }
      ApplyStage: {
        Row: {
          about: string | null
          applyType: string
          check: string
          collaboration: string | null
          createdAt: string
          follow: boolean | null
          groupId: string | null
          id: number
          regularActivity: boolean | null
          rule: boolean | null
          sponsor: string | null
          substitute: boolean
          time: number | null
          type: string | null
          updatedAt: string
          winning: Database["public"]["Enums"]["Winning"]
        }
        Insert: {
          about?: string | null
          applyType: string
          check?: string
          collaboration?: string | null
          createdAt?: string
          follow?: boolean | null
          groupId?: string | null
          id?: number
          regularActivity?: boolean | null
          rule?: boolean | null
          sponsor?: string | null
          substitute?: boolean
          time?: number | null
          type?: string | null
          updatedAt?: string
          winning?: Database["public"]["Enums"]["Winning"]
        }
        Update: {
          about?: string | null
          applyType?: string
          check?: string
          collaboration?: string | null
          createdAt?: string
          follow?: boolean | null
          groupId?: string | null
          id?: number
          regularActivity?: boolean | null
          rule?: boolean | null
          sponsor?: string | null
          substitute?: boolean
          time?: number | null
          type?: string | null
          updatedAt?: string
          winning?: Database["public"]["Enums"]["Winning"]
        }
        Relationships: [
          {
            foreignKeyName: "ApplyStage_groupId_fkey"
            columns: ["groupId"]
            isOneToOne: false
            referencedRelation: "Group"
            referencedColumns: ["id"]
          },
        ]
      }
      ApplyStore: {
        Row: {
          applyType: string
          check: string
          createdAt: string
          follow: boolean | null
          groupId: string | null
          id: number
          regularActivity: boolean | null
          rule: boolean | null
          sponsor: string | null
          substitute: boolean
          type: string | null
          updatedAt: string | null
          winning: Database["public"]["Enums"]["Winning"]
        }
        Insert: {
          applyType: string
          check?: string
          createdAt?: string
          follow?: boolean | null
          groupId?: string | null
          id?: number
          regularActivity?: boolean | null
          rule?: boolean | null
          sponsor?: string | null
          substitute?: boolean
          type?: string | null
          updatedAt?: string | null
          winning?: Database["public"]["Enums"]["Winning"]
        }
        Update: {
          applyType?: string
          check?: string
          createdAt?: string
          follow?: boolean | null
          groupId?: string | null
          id?: number
          regularActivity?: boolean | null
          rule?: boolean | null
          sponsor?: string | null
          substitute?: boolean
          type?: string | null
          updatedAt?: string | null
          winning?: Database["public"]["Enums"]["Winning"]
        }
        Relationships: [
          {
            foreignKeyName: "ApplyStore_groupId_fkey"
            columns: ["groupId"]
            isOneToOne: false
            referencedRelation: "Group"
            referencedColumns: ["id"]
          },
        ]
      }
      FightVote: {
        Row: {
          created_at: string
          first: number | null
          id: number
          last: number | null
          second: number | null
        }
        Insert: {
          created_at?: string
          first?: number | null
          id?: number
          last?: number | null
          second?: number | null
        }
        Update: {
          created_at?: string
          first?: number | null
          id?: number
          last?: number | null
          second?: number | null
        }
        Relationships: []
      }
      File: {
        Row: {
          check: string | null
          createdAt: string
          dataName: string | null
          fileCategoryId: string | null
          frame: Database["public"]["Enums"]["Frame"] | null
          groupId: string | null
          id: number
          roomId: number | null
          showName: string | null
          stageId: number | null
          storeId: number | null
        }
        Insert: {
          check?: string | null
          createdAt?: string
          dataName?: string | null
          fileCategoryId?: string | null
          frame?: Database["public"]["Enums"]["Frame"] | null
          groupId?: string | null
          id?: number
          roomId?: number | null
          showName?: string | null
          stageId?: number | null
          storeId?: number | null
        }
        Update: {
          check?: string | null
          createdAt?: string
          dataName?: string | null
          fileCategoryId?: string | null
          frame?: Database["public"]["Enums"]["Frame"] | null
          groupId?: string | null
          id?: number
          roomId?: number | null
          showName?: string | null
          stageId?: number | null
          storeId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "File_roomId_fkey"
            columns: ["roomId"]
            isOneToOne: false
            referencedRelation: "ApplyRoom"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "File_stageId_fkey"
            columns: ["stageId"]
            isOneToOne: false
            referencedRelation: "ApplyStage"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "File_storeId_fkey"
            columns: ["storeId"]
            isOneToOne: false
            referencedRelation: "ApplyStore"
            referencedColumns: ["id"]
          },
        ]
      }
      Group: {
        Row: {
          check: string
          createdAt: string
          email: string
          id: string
          kanaName: string | null
          name: string | null
          type: Database["public"]["Enums"]["GroupType"] | null
          updatedAt: string | null
        }
        Insert: {
          check?: string
          createdAt?: string
          email: string
          id?: string
          kanaName?: string | null
          name?: string | null
          type?: Database["public"]["Enums"]["GroupType"] | null
          updatedAt?: string | null
        }
        Update: {
          check?: string
          createdAt?: string
          email?: string
          id?: string
          kanaName?: string | null
          name?: string | null
          type?: Database["public"]["Enums"]["GroupType"] | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      Manager: {
        Row: {
          affiliation: string | null
          check: string | null
          createdAt: string
          email: string
          groupId: string | null
          id: number
          job: string | null
          kanaName: string
          name: string
          phone: string
          updatedAt: string
        }
        Insert: {
          affiliation?: string | null
          check?: string | null
          createdAt?: string
          email: string
          groupId?: string | null
          id?: number
          job?: string | null
          kanaName: string
          name: string
          phone: string
          updatedAt?: string
        }
        Update: {
          affiliation?: string | null
          check?: string | null
          createdAt?: string
          email?: string
          groupId?: string | null
          id?: number
          job?: string | null
          kanaName?: string
          name?: string
          phone?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Manager_groupId_fkey"
            columns: ["groupId"]
            isOneToOne: true
            referencedRelation: "Group"
            referencedColumns: ["id"]
          },
        ]
      }
      MasterData: {
        Row: {
          catchphrase: string | null
          createdAt: string | null
          enableShooting: string | null
          eventContent: string | null
          eventDate: string | null
          eventName: string | null
          foodIcons: string[] | null
          genre: string | null
          groupId: string
          groupName: string | null
          homepageUrl: string | null
          icons: string[] | null
          id: number
          imageUrl: string | null
          instagramAccount: string | null
          location: string | null
          menuItems: string[] | null
          otherIcons: string[] | null
          projectId: number
          projectType: string
          qrcode: string | null
          searchKeywords: string | null
          ticket: string | null
          tiktokAccount: string | null
          type: string | null
          updatedAt: string | null
          xAccount: string | null
          youtubeAccount: string | null
        }
        Insert: {
          catchphrase?: string | null
          createdAt?: string | null
          enableShooting?: string | null
          eventContent?: string | null
          eventDate?: string | null
          eventName?: string | null
          foodIcons?: string[] | null
          genre?: string | null
          groupId: string
          groupName?: string | null
          homepageUrl?: string | null
          icons?: string[] | null
          id?: number
          imageUrl?: string | null
          instagramAccount?: string | null
          location?: string | null
          menuItems?: string[] | null
          otherIcons?: string[] | null
          projectId: number
          projectType: string
          qrcode?: string | null
          searchKeywords?: string | null
          ticket?: string | null
          tiktokAccount?: string | null
          type?: string | null
          updatedAt?: string | null
          xAccount?: string | null
          youtubeAccount?: string | null
        }
        Update: {
          catchphrase?: string | null
          createdAt?: string | null
          enableShooting?: string | null
          eventContent?: string | null
          eventDate?: string | null
          eventName?: string | null
          foodIcons?: string[] | null
          genre?: string | null
          groupId?: string
          groupName?: string | null
          homepageUrl?: string | null
          icons?: string[] | null
          id?: number
          imageUrl?: string | null
          instagramAccount?: string | null
          location?: string | null
          menuItems?: string[] | null
          otherIcons?: string[] | null
          projectId?: number
          projectType?: string
          qrcode?: string | null
          searchKeywords?: string | null
          ticket?: string | null
          tiktokAccount?: string | null
          type?: string | null
          updatedAt?: string | null
          xAccount?: string | null
          youtubeAccount?: string | null
        }
        Relationships: []
      }
      MeidaisaiChampionship: {
        Row: {
          createdAt: string
          eventId: number
          groupId: string
          id: number
          type: string
        }
        Insert: {
          createdAt?: string
          eventId: number
          groupId: string
          id?: number
          type: string
        }
        Update: {
          createdAt?: string
          eventId?: number
          groupId?: string
          id?: number
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "MeidaisaiChampionship_eventId_fkey"
            columns: ["eventId"]
            isOneToOne: false
            referencedRelation: "MasterData"
            referencedColumns: ["id"]
          },
        ]
      }
      OfficialCircles: {
        Row: {
          id: number
          kanaName: string | null
          name: string
        }
        Insert: {
          id?: number
          kanaName?: string | null
          name: string
        }
        Update: {
          id?: number
          kanaName?: string | null
          name?: string
        }
        Relationships: []
      }
      ProjectManager: {
        Row: {
          check: string | null
          createdAt: string
          email: string
          frame: string
          groupId: string
          id: number
          kanaName: string
          name: string
          phone: string
          roomId: number | null
          stageId: number | null
          storeId: number | null
          type: string
          updatedAt: string
        }
        Insert: {
          check?: string | null
          createdAt?: string
          email: string
          frame: string
          groupId?: string
          id?: number
          kanaName: string
          name: string
          phone: string
          roomId?: number | null
          stageId?: number | null
          storeId?: number | null
          type: string
          updatedAt?: string
        }
        Update: {
          check?: string | null
          createdAt?: string
          email?: string
          frame?: string
          groupId?: string
          id?: number
          kanaName?: string
          name?: string
          phone?: string
          roomId?: number | null
          stageId?: number | null
          storeId?: number | null
          type?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "ProjectManager_roomId_fkey"
            columns: ["roomId"]
            isOneToOne: false
            referencedRelation: "ApplyRoom"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ProjectManager_stageId_fkey"
            columns: ["stageId"]
            isOneToOne: false
            referencedRelation: "ApplyStage"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ProjectManager_storeId_fkey"
            columns: ["storeId"]
            isOneToOne: false
            referencedRelation: "ApplyStore"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Check: "未確認" | "承認" | "却下"
      Frame: "room" | "stage" | "store"
      GroupType: "公認団体" | "学内団体" | "学外団体"
      Winning:
        | "当選"
        | "落選"
        | "未抽選"
        | "2次抽選"
        | "補欠"
        | "テスト"
        | "3次抽選"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      Check: ["未確認", "承認", "却下"],
      Frame: ["room", "stage", "store"],
      GroupType: ["公認団体", "学内団体", "学外団体"],
      Winning: [
        "当選",
        "落選",
        "未抽選",
        "2次抽選",
        "補欠",
        "テスト",
        "3次抽選",
      ],
    },
  },
} as const
