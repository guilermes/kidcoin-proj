BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Aluno] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(150) NOT NULL,
    [email] VARCHAR(150) NOT NULL,
    [password] VARCHAR(255) NOT NULL,
    [salt] VARCHAR(255) NOT NULL,
    [isActive] BIT NOT NULL CONSTRAINT [Aluno_isActive_df] DEFAULT 1,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Aluno_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Aluno_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Aluno_email_key] UNIQUE NONCLUSTERED ([email])
);

CREATE TABLE [dbo].[Professor] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(150) NOT NULL,
    [email] VARCHAR(150) NOT NULL,
    [password] VARCHAR(255) NOT NULL,
    [salt] VARCHAR(255) NOT NULL,
    [isActive] BIT NOT NULL CONSTRAINT [Professor_isActive_df] DEFAULT 1,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Professor_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Professor_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Professor_email_key] UNIQUE NONCLUSTERED ([email])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
