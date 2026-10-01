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
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ApplyConfig: {
        Row: {
          dateKey: string
          frame: string
          id: number
          isEnabled: boolean
          optionKey: string
          order: number
          placeOrder: number
          remaining: number | null
          subKey: string
          typeOrder: number
          updatedAt: string
        }
        Insert: {
          dateKey?: string
          frame: string
          id?: number
          isEnabled?: boolean
          optionKey: string
          order?: number
          placeOrder?: number
          remaining?: number | null
          subKey?: string
          typeOrder?: number
          updatedAt?: string
        }
        Update: {
          dateKey?: string
          frame?: string
          id?: number
          isEnabled?: boolean
          optionKey?: string
          order?: number
          placeOrder?: number
          remaining?: number | null
          subKey?: string
          typeOrder?: number
          updatedAt?: string
        }
        Relationships: []
      }
      ApplyRoom: {
        Row: {
          about: string
          applyType: string
          blackCurtain: boolean
          check: string
          createdAt: string
          date: string
          derivedNumber: number
          deskType: string | null
          follow: boolean
          food: string
          groupId: string
          id: number
          lowerSeatCount: number
          place: string
          presentation: string[]
          regularActivity: boolean
          request: string | null
          room: string | null
          roomCount: number
          rule: boolean
          sound: boolean
          sponsor: string | null
          subSecond: boolean
          type: string
          updatedAt: string
          upperSeatCount: number
          waitingRoom: number | null
          winning: string
        }
        Insert: {
          about: string
          applyType: string
          blackCurtain: boolean
          check?: string
          createdAt?: string
          date: string
          derivedNumber?: number
          deskType?: string | null
          follow?: boolean
          food: string
          groupId?: string
          id?: number
          lowerSeatCount: number
          place: string
          presentation: string[]
          regularActivity?: boolean
          request?: string | null
          room?: string | null
          roomCount: number
          rule?: boolean
          sound: boolean
          sponsor?: string | null
          subSecond?: boolean
          type: string
          updatedAt?: string
          upperSeatCount: number
          waitingRoom?: number | null
          winning: string
        }
        Update: {
          about?: string
          applyType?: string
          blackCurtain?: boolean
          check?: string
          createdAt?: string
          date?: string
          derivedNumber?: number
          deskType?: string | null
          follow?: boolean
          food?: string
          groupId?: string
          id?: number
          lowerSeatCount?: number
          place?: string
          presentation?: string[]
          regularActivity?: boolean
          request?: string | null
          room?: string | null
          roomCount?: number
          rule?: boolean
          sound?: boolean
          sponsor?: string | null
          subSecond?: boolean
          type?: string
          updatedAt?: string
          upperSeatCount?: number
          waitingRoom?: number | null
          winning?: string
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
          about: string
          applyType: string
          check: string
          collaboration: string | null
          createdAt: string
          derivedNumber: number
          follow: boolean
          groupId: string
          id: number
          regularActivity: boolean
          rule: boolean
          scheduleDay: string | null
          scheduleTime: string | null
          sponsor: string | null
          substitute: boolean
          time: number
          type: string
          updatedAt: string
          winning: string
        }
        Insert: {
          about: string
          applyType: string
          check?: string
          collaboration?: string | null
          createdAt?: string
          derivedNumber?: number
          follow?: boolean
          groupId?: string
          id?: number
          regularActivity?: boolean
          rule?: boolean
          scheduleDay?: string | null
          scheduleTime?: string | null
          sponsor?: string | null
          substitute?: boolean
          time: number
          type: string
          updatedAt?: string
          winning: string
        }
        Update: {
          about?: string
          applyType?: string
          check?: string
          collaboration?: string | null
          createdAt?: string
          derivedNumber?: number
          follow?: boolean
          groupId?: string
          id?: number
          regularActivity?: boolean
          rule?: boolean
          scheduleDay?: string | null
          scheduleTime?: string | null
          sponsor?: string | null
          substitute?: boolean
          time?: number
          type?: string
          updatedAt?: string
          winning?: string
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
          derivedNumber: number
          follow: boolean
          groupId: string
          id: number
          regularActivity: boolean
          rule: boolean
          sponsor: string | null
          storeNumber: number | null
          substitute: boolean
          type: string
          updatedAt: string
          winning: string
        }
        Insert: {
          applyType: string
          check?: string
          createdAt?: string
          derivedNumber?: number
          follow?: boolean
          groupId?: string
          id?: number
          regularActivity?: boolean
          rule?: boolean
          sponsor?: string | null
          storeNumber?: number | null
          substitute?: boolean
          type: string
          updatedAt?: string
          winning: string
        }
        Update: {
          applyType?: string
          check?: string
          createdAt?: string
          derivedNumber?: number
          follow?: boolean
          groupId?: string
          id?: number
          regularActivity?: boolean
          rule?: boolean
          sponsor?: string | null
          storeNumber?: number | null
          substitute?: boolean
          type?: string
          updatedAt?: string
          winning?: string
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
      CroudMap: {
        Row: {
          id: string
          masterDataID: number
          time: string | null
          timestamp: string | null
        }
        Insert: {
          id?: string
          masterDataID: number
          time?: string | null
          timestamp?: string | null
        }
        Update: {
          id?: string
          masterDataID?: number
          time?: string | null
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CroudMap_masterDataID_fkey"
            columns: ["masterDataID"]
            isOneToOne: false
            referencedRelation: "MasterData142"
            referencedColumns: ["id"]
          },
        ]
      }
      Document: {
        Row: {
          createdAt: string
          dataName: string | null
          frame: Database["public"]["Enums"]["Frame"]
          id: number
          showName: string
          type: string | null
          url: string | null
        }
        Insert: {
          createdAt?: string
          dataName?: string | null
          frame: Database["public"]["Enums"]["Frame"]
          id?: number
          showName: string
          type?: string | null
          url?: string | null
        }
        Update: {
          createdAt?: string
          dataName?: string | null
          frame?: Database["public"]["Enums"]["Frame"]
          id?: number
          showName?: string
          type?: string | null
          url?: string | null
        }
        Relationships: []
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
          check: string
          createdAt: string
          dataName: string
          frame: Database["public"]["Enums"]["Frame"]
          groupId: string
          id: number
          roomId: number | null
          showName: string
          stageId: number | null
          storeId: number | null
          submitFolderId: number
        }
        Insert: {
          check?: string
          createdAt?: string
          dataName: string
          frame: Database["public"]["Enums"]["Frame"]
          groupId: string
          id?: number
          roomId?: number | null
          showName: string
          stageId?: number | null
          storeId?: number | null
          submitFolderId: number
        }
        Update: {
          check?: string
          createdAt?: string
          dataName?: string
          frame?: Database["public"]["Enums"]["Frame"]
          groupId?: string
          id?: number
          roomId?: number | null
          showName?: string
          stageId?: number | null
          storeId?: number | null
          submitFolderId?: number
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
          kanaName: string
          name: string
          password: string | null
          type: Database["public"]["Enums"]["GroupType"]
          updatedAt: string
        }
        Insert: {
          check?: string
          createdAt?: string
          email: string
          id?: string
          kanaName: string
          name: string
          password?: string | null
          type: Database["public"]["Enums"]["GroupType"]
          updatedAt?: string
        }
        Update: {
          check?: string
          createdAt?: string
          email?: string
          id?: string
          kanaName?: string
          name?: string
          password?: string | null
          type?: Database["public"]["Enums"]["GroupType"]
          updatedAt?: string
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
      MasterData142: {
        Row: {
          catchphrase: string | null
          championshipJoin: boolean | null
          createdAt: string | null
          enableShooting: string | null
          eventContent: string | null
          eventDate: string | null
          eventName: string | null
          featuredItems: string[] | null
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
          championshipJoin?: boolean | null
          createdAt?: string | null
          enableShooting?: string | null
          eventContent?: string | null
          eventDate?: string | null
          eventName?: string | null
          featuredItems?: string[] | null
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
          championshipJoin?: boolean | null
          createdAt?: string | null
          enableShooting?: string | null
          eventContent?: string | null
          eventDate?: string | null
          eventName?: string | null
          featuredItems?: string[] | null
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
          ip: string | null
          type: string
        }
        Insert: {
          createdAt?: string
          eventId: number
          groupId: string
          id?: number
          ip?: string | null
          type: string
        }
        Update: {
          createdAt?: string
          eventId?: number
          groupId?: string
          id?: number
          ip?: string | null
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
      MeidaisaiChampionship142: {
        Row: {
          category: string
          createdAt: string
          eventId: number
          groupId: string
          id: number
          ip: string | null
          type: string | null
        }
        Insert: {
          category: string
          createdAt?: string
          eventId: number
          groupId: string
          id?: number
          ip?: string | null
          type?: string | null
        }
        Update: {
          category?: string
          createdAt?: string
          eventId?: number
          groupId?: string
          id?: number
          ip?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "MeidaisaiChampionship142_eventId_fkey"
            columns: ["eventId"]
            isOneToOne: false
            referencedRelation: "MasterData142"
            referencedColumns: ["id"]
          },
        ]
      }
      OfficialCircles: {
        Row: {
          id: number
          kanaName: string
          name: string
        }
        Insert: {
          id?: number
          kanaName: string
          name: string
        }
        Update: {
          id?: number
          kanaName?: string
          name?: string
        }
        Relationships: []
      }
      ProjectManager: {
        Row: {
          check: string
          createdAt: string
          email: string
          frame: Database["public"]["Enums"]["Frame"]
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
          check?: string
          createdAt?: string
          email: string
          frame: Database["public"]["Enums"]["Frame"]
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
          check?: string
          createdAt?: string
          email?: string
          frame?: Database["public"]["Enums"]["Frame"]
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
      RoomPlaceConfig: {
        Row: {
          deskTypeOptions: Json
          foodOptionsMeiji: Json
          foodOptionsOfficial: Json
          foodOptionsOutside: Json
          id: number
          optionKey: string
          presentationMode: string
          presentationOptions: Json
          seatLimit: number
          showBlackCurtain: boolean
          showDeskType: boolean
          showRoomCount: boolean
          showSeatCount: boolean
          showSound: boolean
          showWaitingRoom: boolean
          subKey: string
          updatedAt: string
        }
        Insert: {
          deskTypeOptions?: Json
          foodOptionsMeiji?: Json
          foodOptionsOfficial?: Json
          foodOptionsOutside?: Json
          id?: number
          optionKey: string
          presentationMode?: string
          presentationOptions?: Json
          seatLimit?: number
          showBlackCurtain?: boolean
          showDeskType?: boolean
          showRoomCount?: boolean
          showSeatCount?: boolean
          showSound?: boolean
          showWaitingRoom?: boolean
          subKey: string
          updatedAt?: string
        }
        Update: {
          deskTypeOptions?: Json
          foodOptionsMeiji?: Json
          foodOptionsOfficial?: Json
          foodOptionsOutside?: Json
          id?: number
          optionKey?: string
          presentationMode?: string
          presentationOptions?: Json
          seatLimit?: number
          showBlackCurtain?: boolean
          showDeskType?: boolean
          showRoomCount?: boolean
          showSeatCount?: boolean
          showSound?: boolean
          showWaitingRoom?: boolean
          subKey?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Schedule: {
        Row: {
          createdAt: string
          detail: string | null
          end: string
          frame: string | null
          id: number
          start: string
          title: string
          type: string | null
          updatedAt: string
          url: string | null
        }
        Insert: {
          createdAt?: string
          detail?: string | null
          end: string
          frame?: string | null
          id?: number
          start: string
          title: string
          type?: string | null
          updatedAt?: string
          url?: string | null
        }
        Update: {
          createdAt?: string
          detail?: string | null
          end?: string
          frame?: string | null
          id?: number
          start?: string
          title?: string
          type?: string | null
          updatedAt?: string
          url?: string | null
        }
        Relationships: []
      }
      SubmitFolder: {
        Row: {
          createdAt: string
          customName: string | null
          deadline: string | null
          extension: string
          frame: Database["public"]["Enums"]["Frame"]
          id: number
          noChangeName: boolean
          showName: string
          templateName: string | null
          type: string | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          customName?: string | null
          deadline?: string | null
          extension: string
          frame: Database["public"]["Enums"]["Frame"]
          id?: number
          noChangeName?: boolean
          showName: string
          templateName?: string | null
          type?: string | null
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          customName?: string | null
          deadline?: string | null
          extension?: string
          frame?: Database["public"]["Enums"]["Frame"]
          id?: number
          noChangeName?: boolean
          showName?: string
          templateName?: string | null
          type?: string | null
          updatedAt?: string
        }
        Relationships: []
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
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
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
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
    },
  },
} as const
